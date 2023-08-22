import "css-doodle";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "css-doodle": any;
    }
  }
}

export const _makeDoodle = (params) => {
  // Parametrizing the string is optional, but it makes
  // iterating on the design easier by centralizing values
  // that depend on each other.
  const {
    nBalls = 20, // number of balls to animate
    startTime = 2, // in seconds
    exitTime = -2, // TODO: figure out that this actually means, but nonequal times have a nice curl effect
    shape = "diamond", // circle, square, triangle, diamond, octagon etc
  } = params;
  // For something crazy, remove the x1. so it bceomes 1 dimensional
  // Also try other easing curves, or resizing window to make it responsive.
  return `
  <css-doodle grid="${nBalls}x1">
    @place-cell: center;
    @size: 1px 100%;
    background: #fff9;
    transform: rotate(calc(.5turn / @size() * @i()));
    
    :after {
      content: '';
      position: absolute; top: 0;
      transform: translateY(-50%);
      @size: 3.5vmin;
      @shape: ${shape};
      background: #fff;
      animation:
        move ${startTime}s calc((${exitTime}s / @size()) * (@i() - 1))
        ease-in-out infinite alternate;
    }
    
    @keyframes move { to { top: 100% }  }
  </css-doodle>
  `;
};

export const _CssDoodle = ({ body }) => {
  const dangerousInnerHtml = { __html: body };
  return (
    <div
      className="css-doodle-wrapper"
      dangerouslySetInnerHTML={dangerousInnerHtml}
    />
  );
};
