import React from "react";
import { Route, Switch } from "react-router-dom";
import Form from '../components/CreateCourse/Form';
import { SideNavbar } from "../components/Sidebar/SideNavbar";

import CourseDetails from '../components/CourseDetails/CourseDetails';
import Navbar from '../components/Navbar/Navbar';
import Home from '../components/Home/Home';
import Profile from '../components/Profile/Profile';
import Auth from '../components/Auth/Auth';
import CreatorOrTag from '../components/CreatorOrTag/CreatorOrTag';
import UpdateCourses from '../components/UpdateCourse/UpdateCourse';
import { Redirect } from 'react-router-dom';

const AllRoutes = () => {
    const user = JSON.parse(localStorage.getItem('profile'));
  return (
    <>
      <Navbar/>
      <div style={{display: 'flex'}}>
      <SideNavbar/>
      <Switch>
        <Route path="/form" exact > {" "} <Form /></Route>
        <Route path="/profile" exact > {" "} <Profile /></Route>
        <Route path="/updatecourses" exact > {" "} <UpdateCourses /></Route>
        <Route path="/" exact component={() => <Redirect to="/posts" />} />
        <Route path="/posts" exact component={Home} />
        <Route path="/posts/search" exact component={Home} />
        <Route path="/posts/:id" exact component={CourseDetails} />
        {/* <Route path={['/creators/:name', '/tags/:name']} component={CreatorOrTag} /> */}
        <Route path={['/creators/:name', '/tags/:name']} > <CreatorOrTag/> </Route>
        {/* <Route path="/auth" exact component={() => (!user ? <Auth /> : <Redirect to="/posts" />)} /> */}
        <Route path="/auth" exact> <Auth/> </Route>
      </Switch>
      </div>
    </>
  );
};

export { AllRoutes };