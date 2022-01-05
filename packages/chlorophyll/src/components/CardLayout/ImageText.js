import PropTypes from 'prop-types';

const ImageText = ({ headline, subheading, text, image, imageIsInset }) => (
  <>
    {image && !imageIsInset && (
      <img
        className="rounded-xl -m-4 mb-4"
        alt=""
        src={image}
        style={{ minWidth: 'calc(100% + 32px)' }}
      />
    )}
    {headline && <div className="headline-sm">{headline}</div>}
    {subheading && <div className="title-sm mt-1">{subheading}</div>}
    {image && imageIsInset && (
      <img className="rounded-xl mt-4" alt="" src={image} />
    )}
    {text && <div className="body-lg mt-5">{text}</div>}
  </>
);

ImageText.propTypes = {
  headline: PropTypes.string,
  imageIsInset: PropTypes.bool,
  subheading: PropTypes.string,
  text: PropTypes.string,
  image: PropTypes.string,
};

ImageText.defaultProps = {
  headline: '',
  subheading: '',
  text: '',
  image: '',
  imageIsInset: false,
};

export default ImageText;
