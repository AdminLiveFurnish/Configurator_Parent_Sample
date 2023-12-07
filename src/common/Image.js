import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import cx from 'classnames';
import { RiImageLine } from 'react-icons/ri';
// import constants from '../constants/constants';
// const { SHARED_FILES_CARD_BANNER } = constants;

export default function Image({
  containerProps,
  ratio,
  placeholderWhileLoading,
  placeholderColor = 'var(--image-placeholder)',
  clickLink,
  model_type,
  hideWithNoSrc,
  rounded = true,
  Icon,
  contain,
  imgStyle,
  iconFontSize = 24,
  ...imgProps
}) {
  const [loaded, setLoaded] = useState(!placeholderWhileLoading);
  const [error, setError] = useState(false);
  const containerClassName = cx('imageRoot', containerProps?.className);

  useEffect(() => {
    if (error || loaded) {
      setError(false);
      // TODO: check if we want to reset loaded
    }
  }, [imgProps.src, error, loaded]);

  if (imgProps.avatar) {
    imgProps.style = {
      ...imgProps.style,
      height: '32px',
      borderRadius: 'var(--border-radius)',
    };
  }
  if (!ratio) {
    let styleObj = {
      ...imgProps.style,
    };
    if (!styleObj.borderRadius) {
      styleObj['borderRadius'] = rounded ? 'var(--border-radius)' : 0;
    }
    return <img {...imgProps} className={cx('simpleImage', imgProps.className)} style={styleObj} alt=""/>;
  }

  const paddingBottom = `${(1 / ratio) * 100}%`;

  const handleError = () => {
    setError(true);
  };

  const handleImageLoad = (event) => {
    setLoaded(true);
    imgProps?.onLoad?.(event);
  };
  let Element = `div`;
  if (clickLink && clickLink.length > 0) {
    let otherProps = Object.assign({}, containerProps);
    Element = Link;
    otherProps.to = clickLink;
    containerProps = otherProps;
  }

  const hideImage = hideWithNoSrc && !imgProps.src;

  const ImageIcon = typeof Icon !== 'undefined' ? Icon : RiImageLine;

  return (
    <Element {...containerProps} className={containerClassName}>
      <div
        style={{
          paddingBottom,
          display: 'flex',
          width: '100%',
          backgroundColor:
            (placeholderWhileLoading && !loaded) || error ? placeholderColor : 'transparent',
          borderRadius: rounded ? 'var(--border-radius)' : 0,
        }}>
        {(!loaded || error || !imgProps.src ) && ImageIcon && !imgProps?.initials && (
          <ImageIcon
            fontSize={iconFontSize}
            className={'placeholderIcon'}
            style={{
              ...imgStyle,
            }}
          />
        )}
        {!hideImage &&
          !error && imgProps.src &&
          (imgProps?.initials ? (
            <h2 className="memberInitials">
              {imgProps?.initials
                .split(' ')
                .filter((a, i) => i === 0 || i === imgProps?.initials.split(' ').length - 1)
                .map((a) => a.slice(0, 1))
                .join('')}
            </h2>
          ) : (
            <img
              alt=""
              loading="lazy"
              {...imgProps}
              className={cx(imgProps.className, contain && 'imgContain')}
              onLoad={placeholderWhileLoading ? handleImageLoad : imgProps.onLoad}
              onError={handleError}
              style={{
                ...imgProps.style,
                opacity: loaded ? 1 : 0,
                borderRadius: rounded ? 'var(--border-radius)' : 0,
              }}
            />
          ))}
        {model_type && (
          <span
            style={{
              backgroundColor: 'black',
              color: 'white',
              float: 'right',
              zIndex: 1,
              position: 'absolute',
              bottom: 0,
              right: 0,
              padding: 2,
              borderRadius: '7px 0px 0px ',
            }}>
            {/* {SHARED_FILES_CARD_BANNER?.[model_type]?.title} */}
          </span>
        )}
      </div>
    </Element>
  );
}
