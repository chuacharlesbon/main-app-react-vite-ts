import { useState, type FC } from "react";
import { InView } from "react-intersection-observer";

interface DataProps {
  className?: string;
  children?: any;
  props?: any;
  style?: any;
  enableIntersection?: boolean;
}

export const IntersectionObserverDiv: FC<DataProps> = ({ className, children, style, enableIntersection, ...props }) => {
  const [isSectionVisible, setSectionVisible] = useState(!(enableIntersection ?? true));
  return (
    <InView as="div" onChange={(inView) => {
      if (!isSectionVisible) {
        setTimeout(() => {
          setSectionVisible(inView);
        }, 500);
      }
    }}>
      {
        isSectionVisible
          ? <div className={`${className}`} {...props} style={style} >
            {children}
          </div>
          : <div className='min-vh-100' />
      }
    </InView>
  )
};