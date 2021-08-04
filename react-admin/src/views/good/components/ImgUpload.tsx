import { Upload } from 'antd'

export default props => {

  const uploadImg = (e)=> {
    // console.log('图片上传成功', e)
    if(e.file.response) {
      // 调用Form.Item这个父组件给我的onChange
      props.onChange(e.file.response.data.img)
      // this.$emit('input', img) v-model
    }
  }

  return (
    <Upload
      name="xxx"
      action="http://localhost:9090/api/v2/upload/img"
      listType="picture-card"
      className="avatar-uploader"
      showUploadList={false}
      onChange={uploadImg}
    >
      {
        props.value
        ? <img src={'http://localhost:8888'+props.value} alt=""/>
        : <div>上传</div>
      }
    </Upload>
  )
}
