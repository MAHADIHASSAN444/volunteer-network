import React from 'react';
import Header from '../Header/Header';
import VolunteerSector from '../VolunteerSector/VolunteerSector';

const Home = () => {
    return (
        <main>
        <Header></Header>
        <div className="container mt-5 text-center">
            <h4>I GROW BY HELPING PEOPLE IN NEED.</h4>

            <form className="form-inline d-flex justify-content-center mt-4">
                <input className="form-control mr-sm-2 w-50" type="search" placeholder="Search..." aria-label="Search" />
                <button className="btn btn-primary my-2 my-sm-0" type="submit">Search</button>
            </form>
        </div>

        <div className="volunteer-events container">
            <h4>volunteer sector</h4>
            <VolunteerSector></VolunteerSector>

        </div>

    </main>

    );
};

export default Home;