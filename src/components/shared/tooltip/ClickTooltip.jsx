import React, { useEffect, useRef, useState } from 'react';

const ClickTooltip = ({ children, content }) => {
  const triggerRef = useRef(null);
  const tooltipRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0, pos: 'top' });

  const toggleTooltip = () => setVisible((v) => !v);

  const handleClickOutside = (e) => {
    if (
      tooltipRef.current &&
      !tooltipRef.current.contains(e.target) &&
      !triggerRef.current.contains(e.target)
    ) {
      setVisible(false);
    }
  };

  const calculatePosition = () => {
    if (!triggerRef.current || !tooltipRef.current) return;

    const trigger = triggerRef.current.getBoundingClientRect();
    const tooltip = tooltipRef.current.getBoundingClientRect();
    const margin = 8;

    let top = 0;
    let left = 0;
    let pos = 'top';

    const fitsTop = trigger.top >= tooltip.height + margin;
    const fitsBottom = window.innerHeight - trigger.bottom >= tooltip.height + margin;

    if (fitsTop) {
      top = trigger.top - tooltip.height - margin;
      pos = 'top';
    } else if (fitsBottom) {
      top = trigger.bottom + margin;
      pos = 'bottom';
    } else {
      top = Math.max(trigger.top - tooltip.height - margin, margin);
    }

    left = Math.min(
      Math.max(trigger.left + trigger.width / 2 - tooltip.width / 2, margin),
      window.innerWidth - tooltip.width - margin
    );

    setPosition({ top: top + window.scrollY, left: left + window.scrollX, pos });
  };
  useEffect(() => {
    if (visible) {
    //   const trigger = triggerRef.current.getBoundingClientRect();
    //   const tooltip = tooltipRef.current.getBoundingClientRect();
    //   const margin = 8;

    //   let top, left, pos;

    //   const fitsTop = trigger.top >= tooltip.height + margin;
    //   const fitsBottom = window.innerHeight - trigger.bottom >= tooltip.height + margin;

    //   if (fitsTop) {
    //     top = trigger.top - tooltip.height - margin;
    //     pos = 'top';
    //   } else {
    //     top = trigger.bottom + margin;
    //     pos = 'bottom';
    //   }

    //   left = Math.max(trigger.left + trigger.width / 2 - tooltip.width / 2, 8);

    //   setPosition({ top: top + window.scrollY, left: left + window.scrollX, pos });
      calculatePosition();
      window.addEventListener('scroll', calculatePosition, true);
      window.addEventListener('resize', calculatePosition);
      document.addEventListener('click', handleClickOutside);
    }

    
    return () => {
      window.removeEventListener('scroll', calculatePosition, true);
      window.removeEventListener('resize', calculatePosition);
      document.removeEventListener('click', handleClickOutside);
    };
  }, [visible]);

  return (
    <>
      <span ref={triggerRef} onClick={toggleTooltip} className="inline-block cursor-pointer">
        {children}
      </span>

      {visible && (
        <div
          ref={tooltipRef}
          className="absolute z-50 px-0 py-0 text-sm rounded border-2 border-sky-200 shadow transition-opacity"
          style={{ top: position.top, left: position.left }}
        >
          <div className='bg-gray-50 p-2'>{content}</div>
          <div style={{zIndex:'-1'}}
            className={`absolute z-0 w-3 h-2 bg-sky-200 rotate-45 ${
              position.pos === 'top'
                ? 'bottom-[-4px] left-1/2 -translate-x-1/2'
                : 'top-[-4px] left-1/2 -translate-x-1/2'
            }`}
          ></div>
        </div>
      )}
    </>
  );
};

export default ClickTooltip;
