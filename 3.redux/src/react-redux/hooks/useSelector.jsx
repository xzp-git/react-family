import React, {
  useLayoutEffect,
  useContext,
  useSyncExternalStore,
  useState,
} from "react";
import ReactReduxContext from "../ReactReduxContext";

function useSelector(selector) {
  const { store } = useContext(ReactReduxContext);

  //React18最新添加的自定义Hooks 两个参数 1外部仓库订阅的方法 2 获取快照的方法  获取最新的状态
  return useSyncExternalStore(store.subscribe, () =>
    selector(store.getState())
  );
}

// function useSyncExternalStore(subscribe, getSnapshot) {
//   let [state, setState] = useState(getSnapshot());
//   useLayoutEffect(() => {
//     subscribe(() => {
//       setState(getSnapshot());
//     });
//   }, []);
//   return state;
// }

export default useSelector;
