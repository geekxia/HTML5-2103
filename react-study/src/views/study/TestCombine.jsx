import React from 'react'
import PropTypes from 'prop-types'

// 在react中，组件的代码复用是继承，还是组合？——组合
// 组合，在React组件化中，应用极其方法。
// 组合的语法基础：props.children，render props（指的是React元素的自定义属性可以jsx元素）

// 如果要封装刚才看到的这种Modal？
// 一、如果我使用继承的思想，该怎么做？
// class Modal extends React.Component { }   // 基类
// class ConfirmModal extends Modal { }      // 子类
// class DeleteModal extends Modal { }       // 子类
// class SmallConfirmModal extends ConfirmModal { }  // 子类

// 二、使用组合的思想来封装这种Modal？
// prop-types 实现属性值的验证
const Modal = props => {
  let {
    size,     // 控制弹框的大小，可选值small/middle/default
    visible,  // 控制显示与隐藏
    title,    // 自定义弹框标题，支持ReactNode
    closable, // 是否显示X关闭按钮，默认是true
    children, // 弹框body体中的内容，ReactNode
    type,     // 弹框的类型，可选值 confirm/delete
    footer,   // 自定义弹框底部按钮组，支持ReactNode
    onOk,     // 弹框确定时的回调事件
    onClose,  // 关闭弹框、取消时的回调事件
    okText    // 自定义确定按钮中的文本
  } = props

  // 用于渲染弹框底部的按钮组
  const delBtn = (
    <span
      onClick={onOk}
      key='1'
      className={`delete btn-${size}`}>
      删除
    </span>
  )
  const conBtn = (
    <span
      onClick={onOk}
      key='2'
      className={`confirm btn-${size}`}>
      { okText || "确定" }
    </span>
  )
  const canBtn = (
    <span
      onClick={onClose}
      key='3'
      className={`cancel btn-${size}`}>
      取消
    </span>
  )
  const renderBtns = ()=> {
    let arr = []
    switch ((type||'confirm')) {
      case 'confirm':
        arr = [conBtn]
        break;
      case 'delete':
        arr = [delBtn]
        break;
      case 'warning':
        break;
      default:
    }
    return [...arr, canBtn]
  }

  return (
    <div
      className='qf-modal-layer'
      style={{display:(visible||false)?"block":"none"}}
    >
      <div className={`qf-modal qf-modal-${size||"default"}`}>
        {
          size!=='small'
          &&
          <div className='header'>
            <span>{title||'Title'}</span>
            {
              (closable||true)
              &&
              <span
                onClick={()=>onClose&&onClose()}
                className='close'>
                X
              </span>
            }
          </div>
        }
        <div className='body'>
          { children }
        </div>
        <div
          className='footer'
          style={{border: !(size==='small') || 'none'}}
        >
          { footer || renderBtns() }
        </div>
      </div>
    </div>
  )
}

// 使用prop-types这个第三库对props类型验证
Modal.propTypes = {
  size: PropTypes.oneOf(['small', 'middle', 'default']),
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  closable: PropTypes.bool,
  type: PropTypes.oneOf(['confirm', 'delete']),
  footer: PropTypes.node,
  onOk: PropTypes.func,
  onClose: PropTypes.func,
  okText: PropTypes.string
}

// 测试，使用自己封装Modal组件
export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
      show2: false
    }
  }
  editUser() {
    // 新值是由旧值取反得到的
    this.setState(s=>({show: !s.show}))
  }
  // 点击确定时
  confirmHandle() {
    // 提交接口.then()
    this.setState({show: false})
  }

  delUser() {
    this.setState(s=>({show2: !s.show2}))
  }
  deleteHandle() {
    // 提交接口.then()
    this.setState({show2: false})
  }
  render() {
    let { show, show2 } = this.state
    return (
      <div>
        <h1>学习组合</h1>

        {/* 功能1：修改用户名 */}
        <button onClick={()=>this.editUser()}>修改用户名</button>
        <Modal
          visible={show}
          title={<span>修改用户名</span>}
          onClose={()=>this.setState({show:false})}
          footer={null}
          onOk={()=>this.confirmHandle()}
          okText='提交'
        >
          <div>
            <span>用户名：</span>
            <input type="text"/>
          </div>
          <div>
            <span>密码：</span>
            <input type="text"/>
          </div>
        </Modal>

        {/* 功能2：删除用户 */}
        <button onClick={()=>this.delUser()}>删除用户名</button>
        <Modal
          visible={show2}
          title={<span style={{color:'red'}}>危险</span>}
          onClose={()=>this.setState({show2:false})}
          onOk={()=>this.deleteHandle()}
          type='delete'
          size='small'
        >
          <div>你确定要删除XX用户吗？</div>
        </Modal>
      </div>
    )
  }
}
