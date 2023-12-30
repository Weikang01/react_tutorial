import React, { Component } from 'react'
import { Space, Button, DatePicker, ConfigProvider } from 'antd';
import { SearchOutlined } from '@ant-design/icons'


export default class App extends Component {
  onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  render() {
    return (
      <div>
        <ConfigProvider
          theme={{
            token: {
              // Seed Token
              colorPrimary: '#00b96b',
              borderRadius: 2,

              // Alias Token
              colorBgContainer: '#f6ffed',
            },
          }}
        >
          <Space>
            <Button type="primary" icon={<SearchOutlined />}>Primary Button</Button>
            <DatePicker onChange={this.onChange} />
          </Space>
        </ConfigProvider>
      </div>
    )
  }
}
