import "./container.scss";

const Container = ({ children, style, className, id }: any) => {
  return (
    <div className="mrw__container" id={id}>
      <div className={className} style={style}>
        {children}
      </div>
    </div>
  );
};

export default Container;
