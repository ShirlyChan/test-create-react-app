import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { LocaleProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import './App.css';
import routes from './routes';

const APP = () => (
  <LocaleProvider locale={zhCN}>
    {routes}
  </LocaleProvider>
);

export default hot(module)(APP);

