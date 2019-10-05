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

declare namespace Reveal {
  /** Flags if Reveal.initialize() has been called */
  let initialized: boolean;

  /** Flags if reveal.js is loaded (has dispatched the 'ready' event) */
  let loaded: boolean;

  /** Flags if the overview mode is currently active */
  let overview: boolean;

  /** Holds the dimensions of our overview slides, including margins */
  let overviewSlideWidth: any;

  /** Holds the dimensions of our overview slides, including margins */
  let overviewSlideHeight: any;

  /** The horizontal index of the currently active slide */
  let indexh: any;

  /** The vertical index of the currently active slide */
  let indexv: any;

  /** The previous slide HTML elements */
  let previousSlide: any;

  /** The current slide HTML elements */
  let currentSlide: any;

  let previousBackground: any;

  /** Remember which directions that the user has navigated towards */
  let hasNavigatedRight: boolean;

  /** Remember which directions that the user has navigated towards */
  let hasNavigatedDown: boolean;

  /**
   * Slides may hold a data-state attribute which we pick up and apply
   * as a class to the body. This list contains the combined state of
   * all current slides.
   */
  let state: any[];

  /** The current scale of the presentation (see width/height config) */
  let scale: number;

  /**
   * CSS transform that is currently applied to the slides container,
   * split into two groups
   */
  let slidesTransform: {
    layout: string;
    overview: string;
  }

  /** Cached references to DOM elements */
  let dom: any;

  /** A list of registered reveal.js plugins */
  let plugins: any;

  /** List of asynchronously loaded reveal.js dependencies */
  let asyncDependencies: any[];

  /** Features supported by the browser, see #checkCapabilities() */
  let features: any;

  /** Client is a mobile device, see #checkCapabilities() */
  let isMobileDevice: boolean;

  /** Client is a desktop Chrome, see #checkCapabilities() */
  let isChrome: boolean;

  /** Throttles mouse wheel navigation */
  let lastMouseWheelStep: number;

  /** Delays updates to the URL due to a Chrome thumbnailer bug */
  let writeURLTimeout: number;

  /** Is the mouse pointer currently hidden from view */
  let cursorHidden: boolean;

  /** Timeout used to determine when the cursor is inactive */
  let cursorInactiveTimeout: number;

  /** Flags if the interaction event listeners are bound */
  let eventsAreBound: boolean;

  /** The current auto-slide duration */
  let autoSlide: number;

  /** Auto slide properties */
  let autoSlidePlayer: any;

  /** Auto slide properties */
  let autoSlideTimeout: number;

  /** Auto slide properties */
  let autoSlideStartTime: number;

  /** Auto slide properties */
  let autoSlidePaused: boolean;

  /** Holds information about the currently ongoing touch input */
  let touch: {
    startX: number;
    startY: number;
    startCount: number;
    captured: boolean;
    threshold: number;
  }

  /** A key:value map of shortcut keyboard keys and descriptions of
   * the actions they trigger, generated in #configure() */
  let keyboardShortcuts: any;

  /** Holds custom key code mappings */
  let registeredKeyBindings: any;

  /** Starts up the presentation if the client is capable. */
  function initialize(options: IRevealOptions): void;

  /**
   * Inspect the client to see what it's capable of, this
   * should only happens once per runtime.
   */
  function checkCapabilities(): void;

  /**
   * Loads the dependencies of reveal.js. Dependencies are
   * defined via the configuration option 'dependencies'
   * and will be loaded prior to starting/binding reveal.js.
   * Some dependencies may have an 'async' flag, if so they
   * will load after reveal.js has been started up.
   */
  function load(): void;

  /**
   * Initializes our plugins and waits for them to be ready
   * before proceeding.
   */
  function initPlugins(): void;

  /**
   * Loads all async reveal.js dependencies.
   */
  function loadAsyncDependencies(): void;

  /**
   * Loads a JavaScript file from the given URL and executes it.
   *
   * @param {string} url Address of the .js file to load
   * @param {function} callback Method to invoke when the script
   * has loaded and executed
   */
  function loadScript(url: string, callback: () => void): void;

  /**
   * Starts up reveal.js by binding input events and navigating
   * to the current URL deeplink if there is one.
   */
  function start(): void;

  /**
   * Finds and stores references to DOM elements which are
   * required by the presentation. If a required element is
   * not found, it is created.
   */
  function setupDOM(): void;

  /**
   * Creates a hidden div with role aria-live to announce the
   * current slide content. Hide the div off-screen to make it
   * available only to Assistive Technologies.
   */
  function createStatusDiv(): HTMLElement;

  /**
   * Converts the given HTML element into a string of text
   * that can be announced to a screen reader. Hidden
   * elements are excluded.
   */
  function getStatusText(node: HTMLElement): void;

  /**
   * Configures the presentation for printing to a static
   * PDF.
   */
  function setupPDF(): void;

  /**
   * This is an unfortunate necessity. Some actions – such as
   * an input field being focused in an iframe or using the
   * keyboard to expand text selection beyond the bounds of
   * a slide – can trigger our content to be pushed out of view.
   * This scrolling can not be prevented by hiding overflow in
   * CSS (we already do) so we have to resort to repeatedly
   * checking if the slides have been offset :(
   */
  function setupScrollPrevention(): void;

  /**
   * Creates an HTML element and returns a reference to it.
   * If the element already exists the existing instance will
   * be returned.
   */
  function createSingletonNode(container: HTMLElement, tagname: string, classname: string, innerHTML: string): HTMLElement;

  /**
   * Creates the slide background elements and appends them
   * to the background container. One element is created per
   * slide no matter if the given slide has visible background.
   */
  function createBackgrounds(): void;

  /**
   * Creates a background for the given slide.
   */
  function createBackground(slide: HTMLElement, container: HTMLElement): HTMLElement;

  /**
   * Renders all of the visual properties of a slide background
   * based on the various background attributes.
   */
  function syncBackground(slide: HTMLElement): void;

  /**
   * Registers a listener to postMessage events, this makes it
   * possible to call all reveal.js API methods from another
   * window. For example:
   *
   * revealWindow.postMessage( JSON.stringify({
   *   method: 'slide',
   *   args: [ 2 ]
   * }), '*' );
   */
  function setupPostMessage(): void;

  /**
   * Applies the configuration settings from the config
   * object. May be called multiple times.
   */
  function configure(options: IRevealOptions): void;

  /**
   * Binds all event listeners.
   */
  function addEventListeners(): void;

  /**
   * Unbinds all event listeners.
   */
  function removeEventListeners(): void;

  /**
   * Registers a new plugin with this reveal.js instance.
   *
   * reveal.js waits for all regisered plugins to initialize
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
   * Add a custom key binding with optional description to
   * be added to the help screen.
   */
  function addKeyBinding(binding: any, callback: () => void): void;

  /**
   * Removes the specified custom key binding.
   */
  function removeKeyBinding(keyCode: string): void;

  /**
   * Extend object a with the properties of object b.
   * If there's a conflict, object b takes precedence.
   *
   * @param {object} a
   * @param {object} b
   */
  function extend(a: object, b: object): object;

  /**
   * Converts the target object to an array.
   *
   * @param {object} o
   * @return {object[]}
   */
  function toArray(o: object): object[];

  /**
   * Utility for deserializing a value.
   *
   * @param {*} value
   * @return {*}
   */
  function deserialize(value: any): any;

  /**
   * Measures the distance in pixels between point a
   * and point b.
   *
   * @param {object} a point with x/y properties
   * @param {object} b point with x/y properties
   *
   * @return {number}
   */
  function distanceBetween(a: object, b: object): number;

  /**
   * Applies a CSS transform to the target element.
   */
  function transformElement(element: HTMLElement, transform: string): void;

  /**
   * Applies CSS transforms to the slides container. The container
   * is transformed from two separate sources: layout and the overview
   * mode.
   */
  function transformSlides(transforms: object): void;

  /**
   * Injects the given CSS styles into the DOM.
   */
  function injectStyleSheet(value: string): void;

  /**
   * Find the closest parent that matches the given
   * selector.
   *
   * @param {HTMLElement} target The child element
   * @param {String} selector The CSS selector to match
   * the parents against
   *
   * @return {HTMLElement} The matched parent or null
   * if no matching parent was found
   */
  function closestParent(target: HTMLElement, selector: string): HTMLElement;

  /**
   * Converts various color input formats to an {r:0,g:0,b:0} object.
   *
   * @param {string} color The string representation of a color
   * @example
   * colorToRgb('#000');
   * @example
   * colorToRgb('#000000');
   * @example
   * colorToRgb('rgb(0,0,0)');
   * @example
   * colorToRgb('rgba(0,0,0)');
   */
  function colorToRgb(color: string): { r: number, g: number, b: number, a?: number } | null;

  /**
   * Calculates brightness on a scale of 0-255.
   *
   * @param {string} color See colorToRgb for supported formats.
   * @see {@link colorToRgb}
   */
  function colorBrightness(color: string): { r: number, g: number, b: number, a?: number } | null;

  /**
   * Returns the remaining height within the parent of the
   * target element.
   *
   * remaining height = [ configured parent height ] - [ current parent height ]
   *
   * @param {HTMLElement} element
   * @param {number} [height]
   */
  function getRemainingHeight(element: HTMLElement, height?: number): number;

  /**
   * Checks if this instance is being used to print a PDF.
   */
  function isPrintingPDF(): boolean;

  /**
   * Hides the address bar if we're on a mobile device.
   */
  function hideAddressBar(): void;

  /**
   * Causes the address bar to hide on mobile devices,
   * more vertical space ftw.
   */
  function removeAddressBar(): void;

  /**
   * Dispatches an event of the specified type from the
   * reveal DOM element.
   */
  function dispatchEvent(type: any, args: any): void;

  /**
   * Wrap all links in 3D goodness.
   */
  function enableRollingLinks(): void;

  /**
   * Unwrap all 3D links.
   */
  function disableRollingLinks(): void;

  /**
   * Bind preview frame links.
   *
   * @param {string} [selector=a] - selector for anchors
   */
  function enablePreviewLinks(selector?: string): void;

  /**
   * Unbind preview frame links.
   */
  function disablePreviewLinks(): void;

  /**
   * Opens a preview window for the target URL.
   *
   * @param {string} url - url for preview iframe src
   */
  function showPreview(url: string): void;

  /**
   * Open or close help overlay window.
   *
   * @param {Boolean} [override] Flag which overrides the
   * toggle logic and forcibly sets the desired state. True means
   * help is open, false means it's closed.
   */
  function toggleHelp(override?: boolean): void;

  /**
   * Opens an overlay window with help material.
   */
  function showHelp(): void;

  /**
   * Closes any currently open overlay.
   */
  function closeOverlay(): void;

  /**
   * Applies JavaScript-controlled layout rules to the
   * presentation.
   */
  function layout(): void;

  /**
   * Applies layout logic to the contents of all slides in
   * the presentation.
   *
   * @param {string|number} width
   * @param {string|number} height
   */
  function layoutSlideContents(width: string | number, height: string | number): void;

  /**
   * Calculates the computed pixel size of our slides. These
   * values are based on the width and height configuration
   * options.
   *
   * @param {number} [presentationWidth=dom.wrapper.offsetWidth]
   * @param {number} [presentationHeight=dom.wrapper.offsetHeight]
   */
  function getComputedSlideSize(presentationWidth?: number, presentationHeight?: number): number;

  /**
   * Stores the vertical index of a stack so that the same
   * vertical slide can be selected when navigating to and
   * from the stack.
   *
   * @param {HTMLElement} stack The vertical stack element
   * @param {string|number} [v=0] Index to memorize
   */
  function setPreviousVerticalIndex(stack: HTMLElement, v?: string | number): void;

  /**
   * Retrieves the vertical index which was stored using
   * #setPreviousVerticalIndex() or 0 if no previous index
   * exists.
   *
   * @param {HTMLElement} stack The vertical stack element
   */
  function getPreviousVerticalIndex(stack: HTMLElement): number;

  /**
   * Displays the overview of slides (quick nav) by scaling
   * down and arranging all slide elements.
   */
  function activateOverview(): void;

  /**
   * Uses CSS transforms to position all slides in a grid for
   * display inside of the overview mode.
   */
  function layoutOverview(): void;

  /**
   * Moves the overview viewport to the current slides.
   * Called each time the current slide changes.
   */
  function updateOverview(): void;

  /**
   * Exits the slide overview and enters the currently
   * active slide.
   */
  function deactivateOverview(): void;

  /**
   * Toggles the slide overview mode on and off.
   *
   * @param {Boolean} [override] Flag which overrides the
   * toggle logic and forcibly sets the desired state. True means
   * overview is open, false means it's closed.
   */
  function toggleOverview(override?: boolean): void;

  /**
   * Checks if the overview is currently active.
   *
   * @return {Boolean} true if the overview is active,
   * false otherwise
   */
  function isOverview(): boolean;

  /**
   * Return a hash URL that will resolve to the current slide location.
   */
  function locationHash(): string;

  /**
   * Checks if the current or specified slide is vertical
   * (nested within another slide).
   *
   * @param {HTMLElement} [slide=currentSlide] The slide to check
   * orientation of
   * @return {Boolean}
   */
  function isVerticalSlide(slide?: HTMLElement): boolean;

  /**
   * Handling the fullscreen functionality via the fullscreen API
   *
   * @see http://fullscreen.spec.whatwg.org/
   * @see https://developer.mozilla.org/en-US/docs/DOM/Using_fullscreen_mode
   */
  function enterFullscreen(): void;

  /**
   * Shows the mouse pointer after it has been hidden with
   * #hideCursor.
   */
  function showCursor(): void;

  /**
   * Hides the mouse pointer when it's on top of the .reveal
   * container.
   */
  function hideCursor(): void;

  /**
   * Enters the paused mode which fades everything on screen to
   * black.
   */
  function pause(): void;

  /**
   * Exits from the paused mode.
   */
  function resume(): void;

  /**
   * Toggles the paused mode on and off.
   */
  function togglePause(override?: boolean): void;

  /**
   * Checks if we are currently in the paused mode.
   */
  function isPaused(): boolean;

  /**
   * Toggles the auto slide mode on and off.
   *
   * @param {Boolean} [override] Flag which sets the desired state.
   * True means autoplay starts, false means it stops.
   */
  function toggleAutoSlide(override?: boolean): void;

  /**
   * Checks if the auto slide mode is currently on.
   *
   * @return {Boolean}
   */
  function isAutoSliding(): boolean;

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
   * Resets all vertical slides so that only the first
   * is visible.
   */
  function resetVerticalSlides(): void;

  /**
   * Sorts and formats all of fragments in the
   * presentation.
   */
  function sortAllFragments(): void;

  /**
   * Randomly shuffles all slides in the deck.
   */
  function shuffle(): void;

  /**
   * Updates one dimension of slides by showing the slide
   * with the specified index.
   *
   * @param {string} selector A CSS selector that will fetch
   * the group of slides we are working with
   * @param {number} index The index of the slide that should be
   * shown
   *
   * @return {number} The index of the slide that is now shown,
   * might differ from the passed in index if it was out of
   * bounds.
   */
  function updateSlides(selector: string, index: number): number;

  /**
   * Optimization method; hide all slides that are far away
   * from the present slide.
   */
  function updateSlidesVisibility(): void;

  /**
   * Pick up notes from the current slide and display them
   * to the viewer.
   *
   * @see {@link config.showNotes}
   */
  function updateNotes(): void;

  /**
   * Updates the visibility of the speaker notes sidebar that
   * is used to share annotated slides. The notes sidebar is
   * only visible if showNotes is true and there are notes on
   * one or more slides in the deck.
   */
  function updateNotesVisibility(): void;

  /**
   * Checks if there are speaker notes for ANY slide in the
   * presentation.
   */
  function hasNotes(): boolean;

  /**
   * Updates the progress bar to reflect the current slide.
   */
  function updateProgress(): boolean;

  /**
   * Updates the slide number to match the current slide.
   */
  function updateSlideNumber(): boolean;

  /**
   * Applies HTML formatting to a slide number before it's
   * written to the DOM.
   *
   * @param {number} a Current slide
   * @param {string} delimiter Character to separate slide numbers
   * @param {(number|*)} b Total slides
   * @return {string} HTML string fragment
   */
  function formatSlideNumber(a: number, delimiter: string, b?: number): string;

  /**
   * Updates the state of all control/navigation arrows.
   */
  function updateControls(): void;

  /**
   * Updates the background elements to reflect the current
   * slide.
   *
   * @param {boolean} includeAll If true, the backgrounds of
   * all vertical slides (not just the present) will be updated.
   */
  function updateBackground(includeAll: boolean): void;

  /**
   * Updates the position of the parallax background based
   * on the current slide index.
   */
  function updateParallax(): void;

  /**
   * Should the given element be preloaded?
   * Decides based on local element attributes and global config.
   *
   * @param {HTMLElement} element
   */
  function shouldPreload(element: HTMLElement): boolean;

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
   * Determine what available routes there are for navigation.
   */
  function availableRoutes(): { left: boolean, right: boolean, up: boolean, down: boolean };

  /**
   * Returns an object describing the available fragment
   * directions.
   */
  function availableFragments(): { prev: boolean, next: boolean };

  /**
   * Enforces origin-specific format rules for embedded media.
   */
  function formatEmbeddedContent(): void;

  /**
   * Start playback of any embedded content inside of
   * the given element.
   *
   * @param {HTMLElement} element
   */
  function startEmbeddedContent(element: HTMLElement): void;

  /**
   * Starts playing an embedded video/audio element after
   * it has finished loading.
   *
   * @param {object} event
   */
  function startEmbeddedMedia(event: object): void

  /**
   * "Starts" the content of an embedded iframe using the
   * postMessage API.
   *
   * @param {object} event
   */
  function startEmbeddedIframe(event: object): void;

  /**
   * Stop playback of any embedded content inside of
   * the targeted slide.
   *
   * @param {HTMLElement} element
   */
  function stopEmbeddedContent(element: HTMLElement, options?: any): void

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
   * Checks if this presentation is running inside of the
   * speaker notes window.
   *
   * @return {boolean}
   */
  function isSpeakerNotes(): boolean;

  /**
   * Reads the current URL (hash) and navigates accordingly.
   */
  function readURL(): void;

  /**
   * Updates the page URL (hash) to reflect the current
   * state.
   *
   * @param {number} delay The time in ms to wait before
   * writing the hash
   */
  function writeURL(delay: number): void;

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
   * Retrieves the current state of the presentation as
   * an object. This state can then be restored at any
   * time.
   *
   * @return {{indexh: number, indexv: number, indexf: number, paused: boolean, overview: boolean}}
   */
  function getState(): { indexh: number; indexv: number; indexf: number; paused: boolean; overview: boolean; }

  /**
   * Restores the presentation to the given state.
   *
   * @param {object} state As generated by getState()
   * @see {@link getState} generates the parameter `state`
   */
  function setState(state: object): any;

  /**
   * Return a sorted fragments list, ordered by an increasing
   * "data-fragment-index" attribute.
   *
   * Fragments will be revealed in the order that they are returned by
   * this function, so you can use the index attributes to control the
   * order of fragment appearance.
   *
   * To maintain a sensible default fragment order, fragments are presumed
   * to be passed in document order. This function adds a "fragment-index"
   * attribute to each node if such an attribute is not already present,
   * and sets that attribute to an integer value which is the position of
   * the fragment within the fragments list.
   *
   * @param {object[]|*} fragments
   * @param {boolean} grouped If true the returned array will contain
   * nested arrays for all fragments with the same index
   * @return {object[]} sorted Sorted array of fragments
   */
  function sortFragments(fragments: object[] | any, grouped: boolean): object[];

  /**
   * Refreshes the fragments on the current slide so that they
   * have the appropriate classes (.visible + .current-fragment).
   *
   * @param {number} [index] The index of the current fragment
   * @param {array} [fragments] Array containing all fragments
   * in the current slide
   *
   * @return {{shown: array, hidden: array}}
   */
  function updateFragments(index: number, fragments: Array<any>): { shown: Array<any>; hidden: Array<any>; }

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
  function previousFragment(): boolean;

  /**
   * Cues a new automated slide if enabled in the config.
   */
  function cueAutoSlide(): void;

  /**
   * Cancels any ongoing request to auto-slide.
   */
  function cancelAutoSlide(): void;

  function pauseAutoSlide(): void;

  function resumeAutoSlide(): void;

  function navigateLeft(): void;

  function navigateRight(): void;

  function navigateUp(): void;

  function navigateDown(): void;

  /**
   * Navigates backwards, prioritized in the following order:
   * 1) Previous fragment
   * 2) Previous vertical slide
   * 3) Previous horizontal slide
   */
  function navigatePrev(): void;

  /**
   * The reverse of #navigatePrev().
   */
  function navigateNext(): void;

  /**
   * Checks if the target element prevents the triggering of
   * swipe navigation.
   */
  function isSwipePrevented(target: HTMLElement): boolean;

  // --------------------------------------------------------------------//
  // ----------------------------- EVENTS -------------------------------//
  // --------------------------------------------------------------------//

  /**
   * Called by all event handlers that are based on user
   * input.
   *
   * @param {object} [event]
   */
  function onUserInput(event: object): void;

  /**
   * Called whenever there is mouse input at the document level
   * to determine if the cursor is active or not.
   *
   * @param {object} event
   */
  function onDocumentCursorActive(event: object): void;

  /**
   * Handler for the document level 'keypress' event.
   *
   * @param {object} event
   */
  function onDocumentKeyPress(event: object): void;

  /**
   * Handler for the document level 'keydown' event.
   *
   * @param {object} event
   */
  function onDocumentKeyDown(event: object): void;

  /**
   * Handler for the 'touchstart' event, enables support for
   * swipe and pinch gestures.
   *
   * @param {object} event
   */
  function onTouchStart(event: object): void;

  /**
   * Handler for the 'touchmove' event.
   *
   * @param {object} event
   */
  function onTouchMove(event: object): void;

  /**
   * Handler for the 'touchend' event.
   *
   * @param {object} event
   */
  function onTouchEnd(event: object): void;

  /**
   * Convert pointer down to touch start.
   *
   * @param {object} event
   */
  function onPointerDown(event: object): void;

  /**
   * Convert pointer move to touch move.
   *
   * @param {object} event
   */
  function onPointerMove(event: object): void;

  /**
   * Convert pointer up to touch end.
   *
   * @param {object} event
   */
  function onPointerUp(event: object): void;

  /**
   * Handles mouse wheel scrolling, throttled to avoid skipping
   * multiple slides.
   *
   * @param {object} event
   */
  function onDocumentMouseScroll(event: object): void;

  /**
   * Clicking on the progress bar results in a navigation to the
   * closest approximate horizontal slide using this equation:
   *
   * ( clickX / presentationWidth ) * numberOfSlides
   *
   * @param {object} event
   */
  function onProgressClicked(event: object): void;

  /**
   * Event handler for navigation control buttons.
   */
  function onNavigateLeftClicked(event: object): void;
  function onNavigateRightClicked(event: object): void;
  function onNavigateUpClicked(event: object): void;
  function onNavigateDownClicked(event: object): void;
  function onNavigatePrevClicked(event: object): void;
  function onNavigateNextClicked(event: object): void;

  /**
   * Handler for the window level 'hashchange' event.
   *
   * @param {object} [event]
   */
  function onWindowHashChange(event?: object): void;

  /**
   * Handler for the window level 'resize' event.
   *
   * @param {object} [event]
   */
  function onWindowResize(event?: object): void;

  /**
   * Handle for the window level 'visibilitychange' event.
   *
   * @param {object} [event]
   */
  function onPageVisibilityChange(event?: object): void;

  /**
   * Invoked when a slide is and we're in the overview.
   *
   * @param {object} event
   */
  function onOverviewSlideClicked(event: object): void;

  /**
   * Handles clicks on links that are set to preview in the
   * iframe overlay.
   *
   * @param {object} event
   */
  function onPreviewLinkClicked(event: object): void;

  /**
   * Handles click on the auto-sliding controls element.
   *
   * @param {object} [event]
   */
  function onAutoSlidePlayerClick(event?: object): void;

  // --------------------------------------------------------------------//
  // ------------------------ PLAYBACK COMPONENT ------------------------//
  // --------------------------------------------------------------------//


  /**
   * Constructor for the playback component, which displays
   * play/pause/progress controls.
   *
   * @param {HTMLElement} container The component will append
   * itself to this
   * @param {function} progressCheck A method which will be
   * called frequently to get the current progress on a range
   * of 0-1
   */
  class Playback {
    diameter: number;
    diameter2: number;
    thickness: number;

    /** Flags if we are currently playing */
    playing: boolean;

    /** Current progress on a 0-1 range */
    progress: number;

    /** Used to loop the animation smoothly */
    progressOffset: number;

    constructor(container: HTMLElement, progressCheck: Function);

    setPlaying(value: any): void;

    animate(): void;

    /**
     * Renders the current progress and playback state.
     */
    render(): void;

    on(type: string, listener: Function): void;

    off(type: string, listener: Function): void;

    destroy(): void;
  }
}