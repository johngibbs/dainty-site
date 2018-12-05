import React from "react";
import { ColorsContext } from "../colors-context";
import RcSlider from "rc-slider";

export const Slider = props => {
  return (
    <ColorsContext.Consumer>
      {({ colors, getTypeShade }) => (
        <React.Fragment>
          <RcSlider style={{ marginBottom: 16 }} {...props} />
          <style jsx global>{`
            .rc-slider {
              position: relative;
              height: 14px;
              padding: 5px 0;
              width: 100%;
              border-radius: 6px;
              -ms-touch-action: none;
              touch-action: none;
              box-sizing: border-box;
              -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
            }
            .rc-slider * {
              box-sizing: border-box;
              -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
            }
            .rc-slider-rail {
              position: absolute;
              width: 100%;
              background-color: ${colors.neutral[getTypeShade(3)]};
              height: 4px;
              border-radius: 6px;
            }
            .rc-slider-track {
              position: absolute;
              left: 0;
              height: 4px;
              border-radius: 6px;
              background-color: ${colors.neutral[getTypeShade(12)]};
            }
            .rc-slider-handle {
              position: absolute;
              margin-left: -7px;
              margin-top: -5px;
              width: 14px;
              height: 14px;
              cursor: pointer;
              cursor: -webkit-grab;
              cursor: grab;
              border-radius: 50%;
              border: solid 2px ${colors.neutral[getTypeShade(16)]};
              background-color: ${colors.neutral[40]};
              -ms-touch-action: pan-x;
              touch-action: pan-x;
            }
            .rc-slider-handle:focus {
              border-color: ${colors.neutral[getTypeShade(20)]};
              box-shadow: 0 0 0 1px ${colors.blueLessChroma[getTypeShade(16)]};
              outline: none;
            }
            .rc-slider-handle-click-focused:focus {
              border-color: ${colors.neutral[getTypeShade(16)]};
              box-shadow: unset;
            }
            .rc-slider-handle:hover {
              border-color: ${colors.neutral[getTypeShade(20)]};
            }
            .rc-slider-handle:active {
              border-color: ${colors.neutral[getTypeShade(20)]};
              box-shadow: 0 0 1px ${colors.blueLessChroma[getTypeShade(20)]};
              cursor: -webkit-grabbing;
              cursor: grabbing;
            }
            .rc-slider-mark {
              position: absolute;
              top: 18px;
              left: 0;
              width: 100%;
              font-size: 12px;
            }
            .rc-slider-mark-text {
              position: absolute;
              display: inline-block;
              vertical-align: middle;
              text-align: center;
              cursor: pointer;
              color: #999;
            }
            .rc-slider-mark-text-active {
              color: #666;
            }
            .rc-slider-step {
              position: absolute;
              width: 100%;
              height: 4px;
              background: transparent;
            }
            .rc-slider-dot {
              position: absolute;
              bottom: -2px;
              margin-left: -4px;
              width: 8px;
              height: 8px;
              border: 2px solid #e9e9e9;
              background-color: #fff;
              cursor: pointer;
              border-radius: 50%;
              vertical-align: middle;
            }
            .rc-slider-dot-active {
              border-color: #96dbfa;
            }
          `}</style>
        </React.Fragment>
      )}
    </ColorsContext.Consumer>
  );
};
