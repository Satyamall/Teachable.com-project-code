import React from "react";
import { Route, Switch } from "react-router-dom";
import Form from '../components/CreateCourse/Form';
import { SideNavbar } from "../components/Sidebar/SideNavbar";

import CourseDetails from '../components/CourseDetails/CourseDetails';
import Navbar from '../components/Navbar/Navbar';
import Home from '../components/Home/Home';
import Membership from '../components/Membership/Membership';
import Profile from '../components/Profile/Profile';
import Auth from '../components/Auth/Auth';
import CreatorOrTag from '../components/CreatorOrTag/CreatorOrTag';
import UpdateCourses from '../components/UpdateCourse/UpdateCourse';
import { Redirect } from 'react-router-dom';
import MySchool from "../components/MySchools/Home";
import CreateSchool from '../components/CreateSchool/CreateSchool'
import TellUs from '../components/CreateSchool/TellUs'
import Welcome from '../components/CreateSchool/Welcome'
import ChooseProduct from '../components/CreateSchool/ChooseProduct'




const AllRoutes = () => {
    const user = JSON.parse(localStorage.getItem('profile'));
  return (
    <>
      <div style={{display: 'flex'}}>
        <div>
            <SideNavbar/>
        </div>
        <div>
          <Switch>
            <Route path="/form" exact > {" "} <Form /></Route>
            <Route path="/membership" exact > {" "} <Membership /></Route>
            <Route path="/profile" exact > {" "} <Profile /></Route>
            <Route path="/updatecourses" exact > {" "} <UpdateCourses /></Route>
            <Route path="/" exact component={() => <Redirect to="/myschools" />} />
            <Route path="/courses" exact component={Home} />
            <Route path="/myschools" exact component={MySchool} />
            <Route path="/myschools/createnewschool" exact component={CreateSchool} />
            <Route path="/myschools/createnewschool/tellus" exact component={TellUs} />
            <Route path="/myschools/createnewschool/tellus/welcome" exact component={Welcome} />
            <Route path="/myschools/createnewschool/tellus/welcome/chooseproduct" exact component={ChooseProduct} />
            <Route path="/courses/search" exact component={Home} />
            <Route path="/courses/:id" exact component={CourseDetails} />
            {/* <Route path={['/creators/:name', '/tags/:name']} component={CreatorOrTag} /> */}
            <Route path={['/creators/:name', '/tags/:name']} > <CreatorOrTag/> </Route>
            {/* <Route path="/auth" exact component={() => (!user ? <Auth /> : <Redirect to="/courses" />)} /> */}
            <Route path="/auth" exact> <Auth/> </Route>
          </Switch>
        </div>
      </div>
    </>
  );
};

export { AllRoutes };