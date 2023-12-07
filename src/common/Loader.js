import cx from 'classnames';
import CircularProgress from './CircularProgress';



export default function Loader(props) {
  const {
    loading,
    color,
    borderColor = null,
    thickness,
    position,
    as,
    size,
    children,
    className,
    style,
    backdrop,
    ...rest
  } = props;

  if (!loading && !children) return null;

  const Component = as || 'div';

  return (
    <Component
      {...rest}
      className={cx('loaderV2', !children && backdrop && 'backdrop', className)}
      style={{
        position,
        ...style,
      }}>
      {loading && (
        <div className="progressContainer">
          <CircularProgress size={size} color={color} thickness={thickness} borderColor={borderColor} />
        </div>
      )}
      {children}
    </Component>
  );
}
