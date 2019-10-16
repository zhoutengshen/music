import * as  actionTypes from "./constants";
import * as actions from "./actionCreator";
import reducer from "./reducer";
export default {
    actions,
    actionTypes,
    reducer
}


//未来将会这样子做：=================================================================================================================================================
//这个store 最终以audio的状态为最终状态                                                                                                                             ==
                                                                                                                                                                //==
//也就是说，我们每次更改与播放器相关的界面的时候                                                                                                                      ==
//需要这样子做：                                                                                                                                                    ==
// requestAction->audios 状态更改触发audio的回调函数，dispatch 一个resposeAction ->修改状态->更改界面                                                                  ==
//例如暂停按钮 dispatch(requestPauseAction) ->audio感知到请求->audio 暂停->暂停回调函数->dispatch(resoponsePauseAction)->修改暂停状态->触发与暂停状态相关界面的更新        ==