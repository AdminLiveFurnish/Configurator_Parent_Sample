import { Button } from 'react-bootstrap';
import _ from 'lodash';
import cx from 'classnames';
import Loader from './Loader';

function BigButton({
  id,
  cardType,
  title,
  onClick,
  type="button",
  showModalFunction,
  iconSrc,
  alt = null,
  variant,
  ...props
}) {
  function handleClickEvent(e) {
    if (_.isFunction(onClick)) {
      onClick(id, cardType);
    } else if (_.isFunction(showModalFunction)) {
      showModalFunction(true);
    }
  }

  return (
    <Button
      variant={variant || ''}
      size={props.size || 'lg'}
      onClick={handleClickEvent}
      type={type}
      disabled={props.disabled}
      className={cx(props.className, props?.bigBtnClass, 'bigButton font16')}
      title={props.buttonTitle || title ||props.children }
      block={props.block}
      style={props.style}>
      {props.isLoading ? (
        <>
          <Loader loading={props.isLoading} position="relative" color="inherit" size={22} thickness={2} />
          {/* <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
          <span className="visually-hidden">Loading...</span> */}
        </>
      ) : (
        <>
          {props.iconBefore}
          {props.buttonIcon && <props.buttonIcon className="" />}
            {!props.hideButtonText && <span>{props.buttonTitle || props.children}</span>}
            {props.iconAfterText && <props.iconAfterText className="" />}
        </>
      )}
    </Button>
  );
}

BigButton.defaultProps = {
  variant: 'primary',
};

export default BigButton;
