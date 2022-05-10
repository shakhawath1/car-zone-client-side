import React from 'react';
import { Accordion } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div>
            <div className='p-5'>
                <h2 className='text-center my-3'>Blogs</h2>
                <Accordion defaultActiveKey="0" flush>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Difference between javascript and nodejs.</Accordion.Header>
                        <Accordion.Body>
                            Javascript is an implementation of ECMAScript, a standard defining the programming language.Browsers have a built-in interpreter for Javascript, along with a bunch of libraries and a run-time environment for working with web pages. <br />
                            Nodejs is an interpreter and environment for javascript which includes a bunch of libraries for using javascript as a general-purpose programming language, with an emphasis on asynchronicity and non-blocking operations.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>When should you use nodejs and when should you use mongodb?</Accordion.Header>
                        <Accordion.Body>
                            Node.js uses JavaScript, which is great if we're coming from a front-end developer background - a very common pairing that leads to quick full-stack development potential. <br />
                            Mongodb is used for High Write Load, High Availability in Cloud-It is easier to set up a series of master-slave servers and recovery from failure is faster too, Scalability and Big Data sets And Unstable Schema.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Differences between sql and nosql databases.</Accordion.Header>
                        <Accordion.Body>
                            SQL databases are a Relational Database( RDBMS) whereas NoSQL databases are distributed databases. This means they are easier to manage and they provide a higher level of flexibility with newer data models.<br />
                            Sql databases are good for complex query whereas Nosql databases are not good for complex queries No sql don't have standard interfaces to perform complex queries.<br />
                            Sql database represent data in the form of table means it represent data in row and coloumns whereas Nosql database represents data in documents means it collects data in key value pairs.<br />
                            SQL databases are vertically scalable whereas NoSQL databases are horizenatlly scalable.<br />
                            SQL databases are scaled increased by increasing the horse power whereas Nosql databases are scaled by increasing the database servers.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>What is the purpose of jwt and how does it work?</Accordion.Header>
                        <Accordion.Body>
                            JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued. In short, JWTs are used as a secure way to authenticate users and share information.<br />
                            JWT works like this:<br />
                            The user/client app sends a sign in request.<br />
                            Once verified, the API will create a JSON Web Token and sign it using a secret key.<br />
                            Then the API will return that token back to the client application .<br />
                            Finally, the client app will receive the token, verify it on its own side to make sure it's authentic and then proceed to use it on every subsequent request to authenticate the user without having to send their credentials anymore.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>
    );
};

export default Blogs;