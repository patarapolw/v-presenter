export = Reveal;

// --------------------------------------------------------------------//
// ------------------------------- API --------------------------------//
// --------------------------------------------------------------------//

declare namespace Reveal {
  /** The reveal.js version */
  const VERSION: string;

  /** Starts up the presentation if the client is capable. */
  function initialize(options: IRevealOptions): void;

  /**
   * Applies the configuration settings from the config
   * object. May be called multiple times.
   */
  function configure(options: IRevealOptions): void;

  /**
   * Syncs the presentation with the current DOM. Useful
   * when new slides or control elements are added or when
   * the configuration has changed.
   */
  function sync(): void;

  /**
   * Updates reveal.js to keep in sync with new slide attributes. For
   * example, if you add a new `data-background-image` you can call
   * this to have reveal.js render the new background image.
   *
   * Similar to #sync() but more efficient when you only need to
   * refresh a specific slide.
   */
  function syncSlide(slide: HTMLElement): void;

  /**
   * Formats the fragments on the given slide so that they have
   * valid indices. Call this if fragments are changed in the DOM
   * after reveal.js has already initialized.
   *
   * @param {HTMLElement} slide
   * @return {Array} a list of the HTML fragments that were synced
   */
  function syncFragments(slide: HTMLElement): HTMLElement[];

  /**
   * Steps from the current point in the presentation to the
   * slide which matches the specified horizontal and vertical
   * indices.
   *
   * @param {number} [h=indexh] Horizontal index of the target slide
   * @param {number} [v=indexv] Vertical index of the target slide
   * @param {number} [f] Index of a fragment within the
   * target slide to activate
   * @param {number} [o] Origin for use in multimaster environments
   */
  function slide(h?: number, v?: number, f?: number, o?: number): void;

  function left(): void;

  function right(): void;

  function up(): void;

  function down(): void;

  /**
   * Navigates backwards, prioritized in the following order:
   * 1) Previous fragment
   * 2) Previous vertical slide
   * 3) Previous horizontal slide
   */
  function prev(): void;

  /**
   * The reverse of #navigatePrev().
   */
  function next(): void;

  /**
   * Navigate to the specified slide fragment.
   *
   * @param {?number} index The index of the fragment that
   * should be shown, -1 means all are invisible
   * @param {number} offset Integer offset to apply to the
   * fragment index
   *
   * @return {boolean} true if a change was made in any
   * fragments visibility as part of this call
   */
  function navigateFragment(index: number | null, offset: number): boolean;

  /**
   * Navigate to the next slide fragment.
   *
   * @return {boolean} true if there was a next fragment,
   * false otherwise
   */
  function nextFragment(): boolean;

  /**
   * Navigate to the previous slide fragment.
   *
   * @return {boolean} true if there was a previous fragment,
   * false otherwise
   */
  function prevFragment(): boolean;

  /**
   * @deprecated
   */
  type navigateTo = typeof slide;

  /**
   * @deprecated
   */
  type navigateLeft = typeof left;

  /**
   * @deprecated
   */
  type navigateRight = typeof right;

  /**
   * @deprecated
   */
  type navigateUp = typeof up;

  /**
   * @deprecated
   */
  type navigateDown = typeof down;

  /**
   * @deprecated
   */
  type navigatePrev = typeof prev;

  /**
   * @deprecated
   */
  type navigateNext = typeof next;

  /**
   * Forces an update in slide layout
   * 
   * Applies JavaScript-controlled layout rules to the
   * presentation.
   */
  function layout(): void;

  /**
   * Randomly shuffles all slides in the deck.
   */
  function shuffle(): void;

  /**
   * Determine what available routes there are for navigation.
   */
  function availableRoutes(): { left: boolean, right: boolean, up: boolean, down: boolean };

  /**
   * Returns an object describing the available fragment
   * directions.
   */
  function availableFragments(): { prev: boolean, next: boolean };

  /**
   * Open or close help overlay window.
   *
   * @param {Boolean} [override] Flag which overrides the
   * toggle logic and forcibly sets the desired state. True means
   * help is open, false means it's closed.
   */
  function toggleHelp(override?: boolean): void;

  /**
   * Toggles the slide overview mode on and off.
   *
   * @param {Boolean} [override] Flag which overrides the
   * toggle logic and forcibly sets the desired state. True means
   * overview is open, false means it's closed.
   */
  function toggleOverview(override?: boolean): void;

  /**
   * Toggles the paused mode on and off.
   */
  function togglePause(override?: boolean): void;

  /**
   * Toggles the auto slide mode on and off.
   *
   * @param {Boolean} [override] Flag which sets the desired state.
   * True means autoplay starts, false means it stops.
   */
  function toggleAutoSlide(override?: boolean): void;

  /**
   * Checks if the overview is currently active.
   *
   * @return {Boolean} true if the overview is active,
   * false otherwise
   */
  function isOverview(): boolean;

  /**
   * Checks if we are currently in the paused mode.
   */
  function isPaused(): boolean;

  /**
   * Checks if the auto slide mode is currently on.
   *
   * @return {Boolean}
   */
  function isAutoSliding(): boolean;

  /**
   * Checks if this presentation is running inside of the
   * speaker notes window.
   *
   * @return {boolean}
   */
  function isSpeakerNotes(): boolean;

  /**
   * Called when the given slide is within the configured view
   * distance. Shows the slide element and loads any content
   * that is set to load lazily (data-src).
   *
   * @param {HTMLElement} slide Slide to show
   */
  function loadSlide(slide: HTMLElement, options?: any): void;

  /**
   * Unloads and hides the given slide. This is called when the
   * slide is moved outside of the configured view distance.
   *
   * @param {HTMLElement} slide
   */
  function unloadSlide(slide: HTMLElement): void;

  /**
   * Binds all event listeners.
   */
  function addEventListeners(): void;

  /**
   * Unbinds all event listeners.
   */
  function removeEventListeners(): void;

  /**
   * Retrieves the current state of the presentation as
   * an object. This state can then be restored at any
   * time.
   */
  function getState(): IRevealState

  /**
   * Restores the presentation to the given state.
   *
   * @param state As generated by getState()
   * @see {@link getState} generates the parameter `state`
   */
  function setState(state: IRevealState): void;

  /**
   * Returns the number of past slides. This can be used as a global
   * flattened index for slides.
   *
   * @return {number} Past slide count
   */
  function getSlidePastCount(): number;

  /**
   * Returns a value ranging from 0-1 that represents
   * how far into the presentation we have navigated.
   *
   * @return {number}
   */
  function getProgress(): number;

  /**
   * Retrieves the h/v location and fragment of the current,
   * or specified, slide.
   *
   * @param {HTMLElement} [slide] If specified, the returned
   * index will be for this slide rather than the currently
   * active one
   *
   * @return {{h: number, v: number, f: number}}
   */
  function getIndices(slide: HTMLElement): { h: number, v: number, f: number };

  /**
   * Retrieves all slides in this presentation.
   */
  function getSlides(): HTMLElement[];

  /**
   * Returns an array of objects where each object represents the
   * attributes on its respective slide.
   */
  function getSlidesAttributes(): object[];

  /**
   * Retrieves the total number of slides in this presentation.
   *
   * @return {number}
   */
  function getTotalSlides(): number;

  /**
   * Returns the slide element matching the specified index.
   *
   * @return {HTMLElement}
   */
  function getSlide(x: any, y: any): HTMLElement;

  /**
   * Returns the background element for the given slide.
   * All slides, even the ones with no background properties
   * defined, have a background element so as long as the
   * index is valid an element will be returned.
   *
   * @param {mixed} x Horizontal background index OR a slide
   * HTML element
   * @param {number} y Vertical background index
   * @return {(HTMLElement[]|*)}
   */
  function getSlideBackground(x: number | HTMLElement, y: number): HTMLElement[] | undefined;

  /**
   * Retrieves the speaker notes from a slide. Notes can be
   * defined in two ways:
   * 1. As a data-notes attribute on the slide <section>
   * 2. As an <aside class="notes"> inside of the slide
   *
   * @param {HTMLElement} [slide=currentSlide]
   * @return {(string|null)}
   */
  function getSlideNotes(slide: HTMLElement): (string | null);

  /** 
   * Returns the previous slide element, may be null
   */
  function getPreviousSlide(): HTMLElement | null;

  /**
   * Returns the current slide element
   */
  function getCurrentSlide(): HTMLElement;

  /**
   * Returns the current scale of the presentation content
   */
  function getScale(): number;

  /**
   * Returns the current configuration object
   */
  function getConfig(): IRevealOptions;

  /**
   * Helper method, retrieves query string as a key/value hash
   */
  function getQueryHash(): string;

  /**
   * Returns the top-level DOM element
   */
  function getRevealElement(): HTMLElement;

  /**
   * Returns a hash with all registered plugins
   */
  function getPlugins(): any;

  /**
   * Returns true if we're currently on the first slide
   */
  function isFirstSlide(): boolean;

  /**
   * Returns true if we're currently on the last slide
   */
  function isLastSlide(): boolean;

  /**
   * Returns true if we're on the last slide in the current
   * vertical stack
   */
  function isLastVerticalSlide(): boolean;

  /**
   * Checks if reveal.js has been loaded and is ready for use
   */
  function isReady(): boolean;

  /**
   * Forward event binding to the reveal DOM element
   */
  function addEventListener(type: string, listener: () => void, useCapture: boolean): void;

  function removeEventListener(type: string, listener: () => void, useCapture: boolean): void;

  /**
   * Add a custom key binding with optional description to
   * be added to the help screen.
   */
  function addKeyBinding(binding: any, callback: () => void): void;

  /**
   * Removes the specified custom key binding.
   */
  function removeKeyBinding(keyCode: string): void;

  /**
   * Registers a new plugin with this reveal.js instance.
   *
   * reveal.js waits for all registered plugins to initialize
   * before considering itself ready, as long as the plugin
   * is registered before calling `Reveal.initialize()`.
   */
  function registerPlugin(id: string, plugin: any): void;

  /**
   * Checks if a specific plugin has been registered.
   *
   * @param {String} id Unique plugin identifier
   */
  function hasPlugin(id: string): void;

  /**
   * Returns the specific plugin instance, if a plugin
   * with the given ID has been registered.
   *
   * @param {String} id Unique plugin identifier
   */
  function getPlugin(id: string): any;

  /**
   * Programmatically triggers a keyboard event
   */
  function triggerKey(keyCode: string): void;

  /**
   * Registers a new shortcut to include in the help overlay
   */
  function registerKeyboardShortcut(key: string, value: any): void;

  interface IRevealOptions {
    /**
     * The "normal" size of the presentation, aspect ratio will be preserved
     * when the presentation is scaled to fit different resolutions
     * @default 960
     */
    width?: number;
    /**
     * The "normal" size of the presentation, aspect ratio will be preserved
     * when the presentation is scaled to fit different resolutions
     * @default 700
     */
    height?: number;
    /**
     * Factor of the display size that should remain empty around the content
     * @default 0.04
     */
    margin?: number;
    /**
     * Bounds for smallest/largest possible scale to apply to content
     * @default 0.2
     */
    minScale?: number;
    /**
     * Bounds for smallest/largest possible scale to apply to content
     * @default 2.0
     */
    maxScale?: number;
    /** 
     * Display presentation control arrows
     * @default true
     */
    controls?: boolean;
    /**
     * Help the user learn the controls by providing hints, for example by
     * bouncing the down arrow when they first encounter a vertical slide
     * @default true
     */
    controlsTutorial?: boolean;
    /** 
     * Determines where controls appear, "edges" or "bottom-right"
     * @default "bottom-right"
     */
    controlsLayout?: "edges" | "bottom-right";
    /** 
     * Visibility rule for backwards navigation arrows
     * @default "faded"
     */
    controlsBackArrows?: "faded" | "hidden" | "visible";
    /** 
     * Display a presentation progress bar
     * @default true
     */
    progress?: boolean;
    /** 
     * Display the page number of the current slide
     * - true:    Show slide number
     * - false:   Hide slide number
     * 
     * Can optionally be set as a string that specifies the number formatting:
     * - "h.v":	  Horizontal . vertical slide number (default)
     * - "h/v":	  Horizontal / vertical slide number
     * - "c":	  Flattened slide number
     * - "c/t":	  Flattened slide number / total slides
     * 
     * Alternatively, you can provide a function that returns the slide
     * number for the current slide. The function needs to return an array
     * with one string [slideNumber] or three strings [n1,delimiter,n2].
     * See #formatSlideNumber().
     * @default false
     */
    slideNumber?: boolean | string | string[];
    /**
     * Can be used to limit the contexts in which the slide number appears
     * - "all":      Always show the slide number
     * - "print":    Only when printing to PDF
     * - "speaker":  Only in the speaker view
     * @default "all"
     */
    showSlideNumber?: "all" | "print" | "speaker";
    /**
     * Use 1 based indexing for # links to match slide number (default is zero based)
     * @default false
     */
    hashOneBasedIndex?: boolean;
    /** 
     * Add the current slide number to the URL hash so that reloading the
     * page/copying the URL will return you to the same slide
     * @default false
     */
    hash?: boolean;
    /** 
     * Push each slide change to the browser history. Implies `hash: true`
     * @default false
     */
    history?: boolean;
    /** 
     * Enable keyboard shortcuts for navigation
     * @default true
     */
    keyboard?: boolean;
    /** 
     * Enable the slide overview mode
     * @default true
     */
    overview?: boolean;
    /**
     * Disables the default reveal.js slide layout so that you can use
     * custom CSS layout
     * @default false
     */
    disableLayout?: boolean;
    /** 
     * Vertical centering of slides
     * @default true
     */
    center?: boolean;
    /** 
     * Enables touch navigation on devices with touch input
     * @default true
     */
    touch?: boolean;
    /** 
     * Loop the presentation
     * @default false
     */
    loop?: boolean
    /** 
     * Change the presentation direction to be RTL
     * @default false
     */
    rtl?: boolean;
    /** 
     * See https://github.com/hakimel/reveal.js/#navigation-mode
     * @default "default"
     */
    navigationMode?: "default" | "linear" | "grid";
    /** 
     * Randomizes the order of slides each time the presentation loads
     * @default false
     */
    shuffle?: boolean;
    /** 
     * Turns fragments on and off globally
     * @default true
     */
    fragments?: boolean;
    /** 
     * Flags whether to include the current fragment in the URL,
     * so that reloading brings you to the same fragment position
     * @default false
     */
    fragmentInURL?: boolean;
    /**
     * Flags if the presentation is running in an embedded mode,
     * i.e. contained within a limited portion of the screen
     * @default false
     */
    embedded?: boolean;
    /** 
     * Flags if we should show a help overlay when the question mark key is pressed
     * @default true
     */
    help?: boolean;
    /** 
     * Flags if speaker notes should be visible to all viewers
     * @default false
     */
    showNotes?: boolean;
    /**
     * Global override for autoplaying embedded media (video/audio/iframe)
     * - null: Media will only autoplay if data-autoplay is present
     * - true: All media will autoplay, regardless of individual setting
     * - false: No media will autoplay, regardless of individual setting
     * @default null
     */
    autoPlayMedia?: null | boolean;
    /**
     * Global override for preloading lazy-loaded iframes
     * - null: Iframes with data-src AND data-preload will be loaded when within the viewDistance, iframes with only data-src will be loaded when visible
     * - true: All iframes with data-src will be loaded when within the viewDistance
     * - false: All iframes with data-src will be loaded only when visible
     * @default null
     */
    preloadIframes?: null | boolean;
    /**
     * Number of milliseconds between automatically proceeding to the
     * next slide, disabled when set to 0, this value can be overwritten
     * by using a data-autoslide attribute on your slides
     * @default 0
     */
    autoSlide?: number;
    /** 
     * Stop auto-sliding after user input
     * @default true
     */
    autoSlideStoppable?: boolean;
    /** 
     * Use this method for navigation when auto-sliding
     */
    autoSlideMethod?: Function | null;
    /**
     * Specify the average time in seconds that you think you will spend
     * presenting each slide. This is used to show a pacing timer in the
     * speaker view
     * @default null
     */
    defaultTiming: number | null;
    /** 
     * Enable slide navigation via mouse wheel
     * @default false
     */
    mouseWheel?: boolean;
    /**
     * Apply a 3D roll to links on hover
     * @default false
     */
    rollingLinks?: boolean;
    /** 
     * Hides the address bar on mobile devices
     * @default true
     */
    hideAddressBar?: boolean;
    /** 
     * Opens links in an iframe preview overlay
     * Add `data-preview-link` and `data-preview-link="false"` to customise each link
     * individually
     * @default false
     */
    previewLinks?: boolean;
    /**
     * Exposes the reveal.js API through window.postMessage
     * @default true
     */
    postMessage?: boolean;
    /**
     * Dispatches all reveal.js events to the parent window through postMessage
     * @default false
     */
    postMessageEvents?: boolean;
    /**
     * Focuses body when page changes visibility to ensure keyboard shortcuts work
     * @default true
     */
    focusBodyOnPageVisibilityChange?: boolean;
    /**
     * Transition style
     * @default "slide"
     */
    transition?: "none" | "fade" | "slide" | "convex" | "concave" | "zoom";
    /**
     * Transition speed
     * @default "default"
     */
    transitionSpeed?: "default" | "fast" | "slow";
    /**
     * Transition style for full page slide backgrounds
     * @default "fade"
     */
    backgroundTransition?: "none" | "fade" | "slide" | "convex" | "concave" | "zoom";
    /**
     * Parallax background image
     * CSS syntax, e.g. "a.jpg"
     */
    parallaxBackgroundImage?: string;
    /**
     * Parallax background size
     * CSS syntax, e.g. "3000px 2000px"
     */
    parallaxBackgroundSize?: string;
    /**
     * Parallax background repeat
     */
    parallaxBackgroundRepeat?: "repeat" | "repeat-x" | "repeat-y" | "no-repeat" | "initial" | "inherit";
    /**
     * Parallax background position
     * CSS syntax, e.g. "top left"
     */
    parallaxBackgroundPosition?: string;
    /**
     * Amount of pixels to move the parallax background per slide step
     */
    parallaxBackgroundHorizontal?: number | null;
    /**
     * Amount of pixels to move the parallax background per slide step
     */
    parallaxBackgroundVertical?: number | null;
    /**
     * The maximum number of pages a single slide can expand onto when printing
     * to PDF, unlimited by default
     * @default Number.POSITIVE_INFINITY
     */
    pdfMaxPagesPerSlide?: number;
    /**
     * Prints each fragment on a separate slide
     */
    pdfSeparateFragments?: boolean;
    /**
     * Offset used to reduce the height of content within exported PDF pages.
     * This exists to account for environment differences based on how you
     * print to PDF. CLI printing options, like phantomjs and wkpdf, can end
     * on precisely the total height of the document whereas in-browser
     * printing has to end one pixel before.
     * @default -1
     */
    pdfPageHeightOffset?: number;
    /**
     * Number of slides away from the current that are visible
     * @default 3
     */
    viewDistance?: number;
    /**
     * The display mode that will be used to show slides
     * @default "block"
     */
    display?: string;
    /**
     * Hide cursor if inactive
     * @default true
     */
    hideInactiveCursor?: boolean;
    /** 
     * Time before the cursor is hidden (in ms)
     * @default 5000
     */
    hideCursorTime?: number;
    /**
     * Script dependencies to load
     * @default []
     */
    dependencies?: IRevealDependency[];

    /** https://github.com/hakimel/reveal.js/#multiplexing */
    multiplex?: MultiplexConfig;

    /** https://github.com/hakimel/reveal.js/#mathjax */
    math?: MathConfig;
  }

  /**
   * Reveal.js doesn't rely on any third party scripts to work but a few optional libraries are included by default.
   * libraries are loaded as dependencies in the order they appear.
   * You can add your own extensions using the same syntax.
   */
  interface IRevealDependency {
    /** Path to the script to load */
    src: string;
    /** Flags if the script should load after reveal.js has started, defaults to false */
    async?: boolean;
    /** Function to execute when the script has loaded */
    callback?: () => void;
    /** Function which must return true for the script to be loaded */
    condition?: () => boolean;
  }

  interface IRevealState {
    indexh?: number;
    indexv?: number;
    indexf?: number;
    paused?: boolean;
    overview?: boolean;
  }

  /** https://github.com/hakimel/reveal.js/#multiplexing */
  interface MultiplexConfig {
    /** Obtained from the socket.io server. Gives this (the master) control of the presentation */
    secret?: string;
    /** Obtained from the socket.io server */
    id: string;
    /** Location of socket.io server */
    url: string;
  }

  /** https://github.com/hakimel/reveal.js/#mathjax */
  interface MathConfig {
    /** Obtained from the socket.io server. Gives this (the master) control of the presentation */
    mathjax: string;
    /** Obtained from the socket.io server */
    config: string;
  }
}