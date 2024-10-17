import './toggler.css';
import { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import SheepSVG from './SheepSVG';
import SheepLegSVG from './SheepLegSVG';

const Toggler = () => {
  const [checked, setChecked] = useState(false);
  const [count, setCount] = useState(1);
  const sheepRef = useRef(null);
  const swearRef = useRef(null);
  const armWrapRef = useRef(null);
  const pawRef = useRef(null);
  const armRef = useRef(null);
  const bgRef = useRef(null);
  const indicatorRef = useRef(null);
  const {
    set,
    to,
    timeline,
    utils: { random },
  } = gsap;

  const armLimit = random(0, 3);
  const headLimit = random(armLimit + 1, armLimit + 3);
  const angerLimit = random(headLimit + 1, headLimit + 3);
  const armDuration = 0.2;
  const sheepDuration = 0.25;
  const checkboxDuration = 0.25;
  const pawDuration = 0.1;

  const onHover = () => {
    if (Math.random() > 0.5 && count > armLimit) {
      to(sheepRef.current, sheepDuration / 2, { y: '40%' });
    }
  };
  const offHover = () => {
    if (!checked) {
      to(sheepRef.current, sheepDuration / 2, { y: '100%' });
    }
  };
  const onChange = () => {
    if (checked) return;
    setChecked(true);
  };

  useEffect(() => {
    const grabSheepTL = () => {
      /**
       * Different height translations for the sheep elements
       *
       * Paw will go to scaleX 0.8
       * Arm scaleX goes down to 0.7
       * Arm wrap translates to 50% or 50px
       * Sheep goes 100% -> 40% -> 20%
       */
      let sheepTranslation;
      if (count > armLimit && count < headLimit) {
        sheepTranslation = '40%';
        console.log('sheepTranslation = 40%');
      } else if (count >= headLimit) {
        sheepTranslation = '20%';
        console.log('sheepTranslation = 20%');
      }
      const onComplete = () => {
        setChecked(false);
        setCount(count + 1);
      };
      let onSheepComplete = () => {};
      if (Math.random() > 0.5 && count > angerLimit)
        onSheepComplete = () => {
          set(swearRef.current, { display: 'block' });
        };
      const base = armDuration + armDuration + pawDuration;
      const preDelay = Math.random();
      const delay = count > armLimit ? base + sheepDuration + preDelay : base;
      const sheepTL = timeline({ delay: Math.random(), onComplete });
      sheepTL
        .add(
          count > armLimit
            ? to(sheepRef.current, {
                duration: sheepDuration,
                onComplete: onSheepComplete,
                y: sheepTranslation,
              })
            : () => {},
        )
        .to(
          armWrapRef.current,
          { x: 50, duration: armDuration },
          count > armLimit ? preDelay : 0,
        )
        .to(armRef.current, { scaleX: 0.7, duration: armDuration })
        .to(pawRef.current, {
          duration: pawDuration,
          scaleX: 0.8,
          onComplete: () => {
            set(swearRef.current, { display: 'none' });
          },
        })
        .to(
          bgRef.current,
          {
            onStart: () => {},
            duration: checkboxDuration,
            backgroundColor: '#aaa',
          },
          delay,
        )
        .to(
          indicatorRef.current,
          { duration: checkboxDuration, x: '0%' },
          delay,
        )
        .to(pawRef.current, { duration: pawDuration, scaleX: 0 }, delay)
        .to(
          armRef.current,
          { duration: pawDuration, scaleX: 1 },
          delay + pawDuration,
        )
        .to(
          armWrapRef.current,
          { duration: armDuration, x: 0 },
          delay + pawDuration,
        )
        .to(
          sheepRef.current,
          { duration: sheepDuration, y: '100%' },
          delay + pawDuration,
        );
      return sheepTL;
    };
    const showTimeline = () => {
      timeline({})
        .to(
          bgRef.current,
          { duration: checkboxDuration, backgroundColor: '#2eec71' },
          0,
        )
        .to(indicatorRef.current, { duration: checkboxDuration, x: '100%' }, 0)
        .add(grabSheepTL(), checkboxDuration);
    };
    if (checked) showTimeline();
  }, [checked, count]);

  return (
    <div className="main-wrapper">
      <div className="sheep__wrap">
        <div ref={swearRef} className="sheep__swear">
          #@$%*!
        </div>
        <SheepSVG sheepRef={sheepRef} isAngry={count >= angerLimit} />
      </div>
      <div ref={armWrapRef} className="sheep__arm-wrap">
        <SheepLegSVG legRef={armRef} />
      </div>
      <div ref={pawRef} className="sheep__paw" />
      <div className="checkbox" onMouseOver={onHover} onMouseOut={offHover}>
        <input type="checkbox" onChange={onChange} checked={checked} />
        <div ref={bgRef} className="checkbox__bg" />
        <div ref={indicatorRef} className="checkbox__indicator" />
      </div>
    </div>
  );
};

export default Toggler;
