import React from "react";

// export default function WithClass(props) {
// 	return <div className={props.classes}>{props.children}</div>;
// }

export default function withClass(WrappedComp, className) {
  return props => (
    <div className={className}>
      <WrappedComp {...props} />
    </div>
  );
}
