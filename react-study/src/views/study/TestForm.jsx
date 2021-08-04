import React from 'react'

// 表单绑定

// 在react中，表单绑定是单向绑定的。意思是，当表单的value/checked被state变量受控后，我们还需要绑定onChange事件处理器、手动取值来修改表单所绑定的那个state变量。这就叫做"React表单单向绑定"。结论是：在react中使用表单时，取值的工作需要我们搞定。

// 表单有哪些？文本类表单、下拉框、checkbox、radio、文件上传。

// 非受控表单（组件）：表单的value/checked的值不受state控制。

// 受控表单（组件）：表单的value/checked受state控制。


var mobile = ''
export default class extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      addr: '',
      stageName: '',
      desc: '',
      age: 0,
      color: '#000000',
      // 这个数组用于对checkbox进行受控
      checkArr: [],
      // 这个值用于对radio进行受控
      work: '',
      // 这个值用于对select进行受控
      level: ''
    }
  }

  // 功能：提交非受控表单
  submit1() {
    // ref，是一种快捷访问DOM的方式，使用this.refs['refName']访问DOM.
    const data = {
      name: document.getElementById('name').value,
      pass: this.refs.pass.value,
      mobile: mobile,
      addr: this.state.addr
    }
    console.log('提交', data)
  }

  change(e, k) {
    // console.log('change', e.target.value)
    // 手动取出表单事件对象中的最新value值，通过this.setState()把新值覆盖掉旧值。声明式变量就发生了变化，所以视图结构中的表单就是发生了“视图更新”，视觉上你看到的表单就“活”过来了。
    if(k==='checkArr') {
      let val = e.target.value
      let bol = e.target.checked
      this.setState(s=>(
        { [k]: bol ? [...s.checkArr, val] : s.checkArr.filter(ele=>ele!==val) }
      ))
    }else{
      this.setState({[k]: e.target.value})
    }

  }
  // 功能：提交受控表单
  submit2() {
    const data = {
      stageName: this.state.stageName,
      desc: this.state.desc,
      age: this.state.age,
      color: this.state.color,
      checkArr: this.state.checkArr,
      work: this.state.work,
      level: this.state.level
    }
    console.log('提交表单', data)
  }

  checkChange(e) {
    // 当onChange触发时，e.target.checked
    // 如果 = false，说明用户正在取消一个“选择项”
    // 如果 = true，说明用户正在勾选一个“选择项”
    console.log('checkbox checked', e.target.checked)
    console.log('checkbox value', e.target.value)
    // 手动取值来改变checkArr这个声明式变量
    if(e.target.checked) {
      // 表示用户正在勾选，要把它所对应的value追加到checkArr中
      this.setState(s=>({checkArr: [...s.checkArr, e.target.value]}))
    }else{
      // 表示用户正在取消勾选，要把它所对应的value从checkArr中删掉
      this.setState(s=>({checkArr: s.checkArr.filter(ele=>ele!==e.target.value)}))
    }
  }

  // radioChange(e) {
  //   this.setState({work: e.target.value})
  // }

  render() {
    let {
      addr,
      stageName,
      desc,
      age,
      color,
      checkArr,
      work,
      level
    } = this.state

    // 这个数组用于渲染checkbox的视图
    const favArr =  [
      { id: 1, label: '游戏', value: 'youxi' },
      { id: 2, label: '篮球', value: 'basketball' },
      { id: 3, label: '足球', value: 'football' },
      { id: 4, label: '读书', value: 'book' },
      { id: 5, label: '音乐', value: 'music' }
    ]

    // 这个数组用于渲染radio的视图
    const workArr = [
      { id: 1, label: '新手', value: 'a' },
      { id: 2, label: '两年', value: 'b' },
      { id: 3, label: '三年', value: 'c' },
      { id: 4, label: '五年', value: 'd' },
      { id: 5, label: '五年以上', value: 'e' }
    ]

    // 这个数组用于渲染select下拉框的视图
    const levelArr = [
      { id: 1, label: '高中', value: 'a' },
      { id: 2, label: '大专', value: 'b' },
      { id: 3, label: '本科', value: 'c' },
      { id: 4, label: '硕士', value: 'd' }
    ]

    return (
      <div>
        <h1>学习表单绑定</h1>
        <hr/>

        <div className='not-control'>
          {/* 非受控表单，但是在工作不推荐使用 */}
          <span>用户名：</span>
          <input id='name' type="text" />
          <br/>

          {/* 非受控表单，但是在工作不推荐使用 */}
          <span>密码：</span>
          <input ref='pass' type="password" />
          <br/>

          {/* 非受控表单，但是在工作不推荐使用 */}
          <span>手机：</span>
          <input type="text" onInput={e=>mobile=e.target.value}/>
          <br/>

          {/* 非受控表单，但是在工作不推荐使用 */}
          {/* defaultValue是表单的初始值，它不是value */}
          <span>地址：</span>
          <input
            type="text"
            defaultValue={addr}
            onInput={e=>this.state.addr=e.target.value}
          />
          <br/>

          {/* 文件上传这种表单是非受控表单，在工作可以用 */}
          {/* 因为文件上传的数据流很大，不需要放在state上，所以可以使用非受控的方式 */}
          {/* 这是React中唯一的一个可以被允许使用的非受控表单 */}
          <span>头像：</span>
          <input type="file" />
          <br/>

          <br/>
          <button onClick={()=>this.submit1()}>提交非受控表单</button>
        </div>
        <hr/><hr/>

        {/* 除了文件上传以外，其它的表单都要使用受控表单 */}
        <div className='control'>
          <span>艺名：</span>
          <input
            type="text"
            value={stageName}
            onChange={_=>this.change(_, 'stageName')}
          /><br/>

          <span>简介：</span>
          <textarea
            cols="30"
            rows="3"
            value={desc}
            onChange={_=>this.change(_, 'desc')}
          ></textarea><br/>

          <span>年龄：</span>
          <input
            type="number"
            value={age}
            onChange={_=>this.change(_, 'age')}
          /><br/>

          <span>幸运色：</span>
          <input
            type="color"
            value={color}
            onChange={_=>this.change(_, 'color')}
          /><br/>

          {/* 受控组件，checkbox要使用 checked属性来受控，不是value了 */}
          {/* 在checkbox中，value不用于受控了，这里的value是给e.target.value来使用的*/}
          <div className='checkbox'>
          <span>爱好：</span>
          {
            favArr.map(ele=>(
              <span key={ele.id}>
                <input
                  type="checkbox"
                  value={ele.value}
                  checked={checkArr.includes(ele.value)}
                  onChange={_=>this.change(_, 'checkArr')}
                />
                <span>{ele.label}</span>
              </span>
            ))
          }
          </div>

          {/* 受控组件，radio要使用 checked属性来受控，不是value了 */}
          {/* 在radio中，value不用于受控了，这里的value是给e.target.value来使用的*/}
          <div className='radio'>
          <span>工作年限：</span>
          {
            workArr.map(ele=>(
              <span key={ele.id}>
                <input
                  type="radio"
                  value={ele.value}
                  checked={work===ele.value}
                  onChange={_=>this.change(_, 'work')}
                />
                <span>{ele.label}</span>
              </span>
            ))
          }
          </div>

          {/* 受控组件，select框使用value来受控 */}
          <span>选择学历：</span>
          <select
            value={level}
            onChange={_=>this.change(_, 'level')}
          >
          {
            levelArr.map(ele=>(
              <option key={ele.id} value={ele.value}>{ele.label}</option>
            ))
          }
          </select>
          <br/>

          <br/>
          <button onClick={()=>this.submit2()}>提交受控表单</button>
        </div>

        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>





      </div>
    )
  }
}
