import React from "react";
import ReactReduxContext from "./ReactReduxContext";
import { bindActionCreators } from "../redux";

/**
 * 链接 组件和仓库
 * @param {*} mapStateToProps 把仓库中的状态映射为组件的属性对象
 * @param {*} mapDispatchToProps 把store.dispatch映射为组件的属性对象, 参数可以是一个对象， 也可以是一个函数
 * @returns
 */
function connect(mapStateToProps, mapDispatchToProps) {
  return function (OldComponent) {
    return class NewComponent extends React.Component {
      static contextType = ReactReduxContext;
      constructor(props, context) {
        super(props);
        const { store } = context;
        const { getState, dispatch, subscribe } = store;
        //先获取仓库中的总状态
        this.state = mapStateToProps(getState());

        this.unsubscribe = subscribe(() => {
          this.setState(mapStateToProps(getState()));
        });

        let dispatchProps;
        if (typeof mapDispatchToProps === "function") {
          dispatchProps = mapDispatchToProps(dispatch);
        } else {
          dispatchProps = bindActionCreators(mapDispatchToProps, dispatch);
        }
        this.dispatchProps = dispatchProps;
      }
      componentWillUnmount() {
        this.unsubscribe();
      }

      render() {
        return (
          <OldComponent
            {...this.props}
            {...this.state}
            {...this.dispatchProps}
          />
        );
      }
    };
  };
}

export default connect;
