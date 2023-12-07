import cx from 'classnames';
import { forwardRef } from 'react';
import { Portal } from '../../common/Portal';
import CircularProgress from '../../common/CircularProgress';
import styles from './Loader.module.scss';

export const Loader = forwardRef(
  (
    {
      loading,
      color,
      thickness,
      position,
      as,
      size,
      children,
      className,
      style,
      backdrop,
      backdropColor,
      backdropClassName,
      progressContainerClassName,
      renderProgress,
      portal,
      zIndex,
      ...rest
    },
    ref
  ) => {
    if (!loading && !children) return null;

    const Component = as || 'div';
    const isColor = backdropColor !== 'dark' && Boolean(backdropColor);

    const render = (
      <Component
        {...rest}
        ref={ref}
        className={cx(
          styles.loaderV2,
          //   !children && backdrop && styles.backdrop,
          className,
          backdropColor === 'dark' && styles.backdropDark
        )}
        style={{
          position,
          zIndex,
          ...style,
        }}>
        {backdrop && loading && (
          <div
            className={cx(styles.backdrop, backdropClassName)}
            style={{ background: isColor ? backdropColor : undefined }}></div>
        )}
        {loading && (
          <div className={cx(styles.progressContainer, progressContainerClassName)}>
            {typeof renderProgress === 'function' ? (
              renderProgress()
            ) : (
              <CircularProgress size={size} color={color} thickness={thickness} />
            )}
          </div>
        )}
        {children}
      </Component>
    );

    if (portal) {
      return <Portal>{render}</Portal>;
    }

    return render;
  }
);

export default Loader;
