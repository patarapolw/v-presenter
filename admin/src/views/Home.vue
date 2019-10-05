<template lang="pug">
v-container.h-100.d-flex.flex-column.pa-0
  div(style="position: fixed; z-index: 100; width: calc(100% - 256px); padding: 10px")
    v-toolbar.elevation-1
      v-toolbar-title {{headers.title ? `${headers.title} ${date ? `(${date.toDateString()})` : ""}` : ""}}
      v-spacer
      v-toolbar-items
        v-btn(text @click="hasPreview = !hasPreview") {{hasPreview ? "Hide Preview" : "Show Preview"}}
        v-btn(text @click="reset") New
  v-row(style="overflow-y: scroll; margin-top: 75px")
    v-col(:class="hasPreview ? 'col-6 pr-0' : 'col-12'")
      codemirror.h-100(ref="cm" v-model="code" :options="cmOptions" @input="onCmCodeChange")
    v-col(v-show="hasPreview" ref="previewHolder" style="width: 50%")
      v-card.h-100.pa-3(ref="preview" v-html="html")
</template>

<script lang="ts">
import { Vue, Component, Watch } from "vue-property-decorator";
import { anyCompile } from "@zhsrs/make-html";
import matter from "gray-matter";
import { clone } from "../util";
import { toDate } from "valid-moment";
// @ts-ignore
import Reveal from "reveal.js";
console.log(Reveal);
@Component
export default class Home extends Vue {
  private code = "";
  private cmOptions = {
    mode: {
      name: "yaml-frontmatter",
      base: "markdown"
    }
  };

  private headers: any = {};

  private html = "";
  private hasPreview = false;

  private snackbar = {
    text: "",
    color: "",
    show: false
  }

  mounted() {
    this.codemirror.setSize("100%", "100%");
  }

  get codemirror(): CodeMirror.Editor {
    return (this.$refs.cm as any).codemirror;
  }

  get date() {
    if (typeof this.headers.date === "string") {
      return toDate(this.headers.date);
    } else if (this.headers.date instanceof Date) {
      return this.headers.date;
    }

    return null;
  }

  reset() {
    Vue.set(this, "headers", {});
    this.code = "";
    this.html = "";
    this.cmOptions.mode.base = "markdown";

    this.hasPreview = false;
  }

  @Watch("hasPreview")
  resizeIFrame() {
    this.$nextTick(() => {
      const previewHolder = this.$refs.previewHolder as HTMLDivElement;
      const preview = this.$refs.preview as HTMLIFrameElement;
      if (preview && previewHolder) {
        const sqWidth = Math.min(previewHolder.clientHeight, previewHolder.clientWidth) * 0.95;
        preview.style.maxHeight = `${sqWidth}px`;
        preview.style.maxWidth = `${sqWidth}px`;
      }
    });
  }

  onCmCodeChange(newCode: string) {
    this.code = newCode;
    try {
      const {data, content} = matter(newCode);
      Vue.set(this, "headers", data);
      const {html} = anyCompile(content);
      this.html = html;
    } catch(e) {}
  }
}
</script>
