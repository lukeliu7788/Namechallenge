import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from '../component/Main';
import NotFound from '../component/NotFound';


const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Switch>
                <Route path="/" component={Main} exact={true} />
                <Route component={NotFound} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;
