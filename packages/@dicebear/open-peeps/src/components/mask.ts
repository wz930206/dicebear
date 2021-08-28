import type { ComponentGroup, ComponentPickCollection, ColorPickCollection } from '../static-types';

export const mask: ComponentGroup = {
  'medicalMask': (components: ComponentPickCollection, colors: ColorPickCollection) => `<g fill-rule="evenodd" clip-rule="evenodd"><path d="M393.257 70.356c-1.885-23.883-32-34-47-37-49.948-11.742-92.442 18.384-152 19-6.011.094-23.201-.92-31.195-3.03-40.559-9.217-81.076-19.02-120.872-31.107-5.851 1.37-7.582 9.007-3.565 13.358 38.116 13.517 96.429 25.621 127.223 27-.591 39.78-21.591 79.779-50.591 101.779 46.123 51.005 153.692 67.779 216.998 41.006 31.141-9.346 64.002-93.006 61.002-131.006" fill="#fff"/><path d="M38.972 19.423c-1.715-.067-.715-5.067 3.148-4.354C91.965 26.726 154.064 48.93 205.297 48.767c37.689-1.234 71.46-22.224 109.357-22.35 25.475.487 57.959 4.11 75.787 24.552 23.515 74.578-29.438 176.014-112.755 176.601l-15.769-1.141c-53.754-3.96-112.642-10.296-147.29-55.901l-.27.232c-5.181-3.476-4.892-10.983-.489-14.844l.131.206c.084-.136.177-.266.267-.399l-.056-.175c1.694-1.778 3.62-3.441 5.371-4.93l.009.029c26.016-21.675 43.003-54.45 43.981-88.389-8.613 2.366-153.319-27.634-127.488-34.955C54.56 33.55 73.144 39.19 92.105 43.68c.317-.179.773-.132.948.221 23.194 5.708 46.856 8.97 70.549 11.611a117.14 117.14 0 0 0-.126-3.398c-42.128-8.2-83.428-20.377-124.504-32.69ZM380.095 49.69c-86.409-43.65-129.301 20.838-212.87 3.082 8.743 39.006-12.846 81.057-42.169 106.543 42.606 36.876 61.046 42.46 116.936 48.445l7.302.869c10.978 1.301 22.059 2.513 33.07 2.703 57.12-4.157 100.281-63.585 106.74-117.43l.035-1.487c.29-13.666-.338-28.13-6.392-40.649-1.115-.388-2.084-1.087-2.652-2.076ZM259.799 83.956c2.986-.672 6.033 2.586 4.182 5.439-5.981 9.225-20.608 12.799-30.838 14.249-11.847 1.679-23.331.355-34.585-3.686-.603-.217-.56-1.283.162-1.197 10.686 1.272 21.702.34 32.085-2.487 10.528-2.051 19.029-9.053 28.994-12.318Zm81.189-6.645c-.049-1.753 8.569 3.319 9.932 4.002 10.526 6.32 22.71 6.783 34.319 9.264 2.706 1.038 2.702 4.478-.001 5.516-14.489 3.853-36.478-6.26-44.25-18.782Z" fill="#000"/></g>`,
  'respirator': (components: ComponentPickCollection, colors: ColorPickCollection) => `<g fill-rule="evenodd" clip-rule="evenodd"><path d="M344.334 27.115c-8.836-9.17-17.705-18.473-29.01-24.81.498-2.716-.6-5.837-3.827-7.137-31.292-11.7-51.185 21.974-73.847 37.019-5.296 2.846-10.607 6.129-16.52 7.241-12.573 3.671-23.242 11.272-30.823 21.259-4.097 3.935-11.319 10.501-13.325 15.851-1.228 2.184-111.28-50.174-136.326-56-11.86-3.967-18.247 7.246-3.213 13 39.503 15.121 116.849 48.97 134.118 58.723-3.318 10.239-4.309 23.81-1.078 33.936-2.716 15.761 2.557 30.2 12.979 41.516 2.208 3.213 5.584 5.529 7.781 8.317 7.981 20.862 27.133 30.953 49.545 40.924 35.663 15.867 66.75 19.046 86.294 12.096 50.733-19.368 80.178-76.279 70.692-128.133-8.923-36.529-7.081-68.572-53.44-73.802Z" fill="#9DDADB"/><path d="M234.277 26.877c30.517-17.034 35.67-51.752 79.929-34.103 13.828 5.586 18.685 13.855 27.911 24.184 4.777 4.342 10.792 6.501 16.727 8.813 22.574 7.494 35.811 28.785 40.86 51.15 13.209 46.424-.621 100.807-34.38 134.59.476.856.383 2.089-.647 2.658a307.19 307.19 0 0 0-5.66 3.205c-11.808 10.201-35.764 23.614-53.523 23.614-39.597 0-77.848-16.064-101.223-36.682-29.919-24.13-48.787-74.477-39.08-110.712-55.632-26.191-107.166-46.082-128.707-54.71 0 0-7.974-8.363-.145-6.152C86.915 47.02 186.505 93.49 187.703 93.538c.711.03 3.322-5.678 3.837-8.13-2.33-.254-139.7-59.513-156.809-65.01l-.905-.29c-8.137-2.57-6.104-4.57.15-4.206 12.678.74 120.171 50.636 141.089 55.636 9.345-21 35.891-31.9 59.212-44.66Zm66.635-29.77c-16.989-5-29.479 7.331-38.566 20.256-21.436 26.58-60.536 27.421-76.682 59.003l-.483.966 6.392 1.92.174-.288c.504-.784 2.004-2.775 3.276-.963 6.61 7.104-3.738 30.686-9.172 20.3l-.163-.326-8.875-2.443c-16.03 64.966 45.141 123.459 106.687 133.365 0 0 25.678.411 35.969-2.074 7.588-1.832 14.144-5.376 21.148-8.893 6.961-3.495 12.711-8.906 19.454-12.604 19.265-19.102 31.933-45.327 35.378-72.53 3.373-32.619.215-74.15-28.093-94.836-9.319-5.91-20.808-7.498-29.327-14.806C327.862 11.918 315.961.492 300.912-2.894ZM270.359 149.71c-.285-.468.373-.917.746-.568a356.213 356.213 0 0 1 17.278 17.357c.294-.093.627-.182 1.057-.287 2.043-.499 3.808 1.635 2.82 3.516l-.235.421c-1.486 2.53-4.904 4.757-6.938 1.707a352.589 352.589 0 0 1-14.728-22.146Zm-73.622 13.373-.006-.219c-.114-2.173-1.879-7.654 1.71-6.814 4.153 2.416 5.691 8.732 5.924 13.218.256 4.924-7.909 4.986-7.698 0 .088-2.064.251-4.124.07-6.185Zm172.455-15.153a.514.514 0 0 1 .383.942c-6.582 3.698-6.031 11.153-7.093 17.366-7.559 5.038-6.79-16.547 6.71-18.308Zm-188.885-26.378c63.39 6.392 131.58 25.315 196.412 6.074 3.928-1.066 5.486 5.009 1.57 6.059-65.349 16.563-134.74 6.669-197.982-12.133Zm171.92-26.184c1.961-.456 3.81 9.227 6.837 11.029 1.505 3.028 13.439 5.694 8.41 9.407-8.583 1.793-17.995-12.716-15.247-20.436Zm-55.687 2.293c1.473-.03 2.481 1.1 2.963 2.384 1.315 3.771-4.314 3.171-6.411 4.425-8.869 6.108-19.112 11.034-30.011 11.262-.681.014-.687-.887-.13-1.105l1.9-.745c5.996-2.358 11.773-4.776 17.288-8.267 4.464-2.824 8.759-8.08 14.401-7.954Zm-33.49-66.377c-1.499-10.8 32.62-38.07 43.077-26.346 2.704 3.018-.843 7.499-4.41 5.594-14.576-3.824-28.517 12.065-38.667 20.752Z" fill="#000"/></g>`,
}
