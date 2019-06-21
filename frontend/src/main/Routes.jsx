import React from "react";
import { Switch, Route, Redirect } from "react-router";

import Home from "../components/home/Home";
import UserCrud from "../components/user/UserCrud";
import Chat from "../components/chat/Chat";

export default props => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/bots" component={UserCrud} />
    <Route path="/chat" component={Chat} />
    <Redirect from="*" to="/" />
  </Switch>
);
