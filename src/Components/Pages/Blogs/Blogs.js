import { Button, Timeline } from "flowbite-react";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Blogs = () => {
  return (
    <div className="h-screen w-3/4 mx-auto mt-20">
      <Timeline>
        <Timeline.Item>
          <Timeline.Point />
          <Timeline.Content>
            <Timeline.Time>February 2022</Timeline.Time>
            <Timeline.Title>What is 'cors'?</Timeline.Title>
            <Timeline.Body>
              Cross-Origin Resource Sharing (CORS) is an HTTP-header based
              mechanism that allows a server to indicate any origins (domain,
              scheme, or port) other than its own from which a browser should
              permit loading resources. CORS also relies on a mechanism by which
              browsers make a "preflight" request to the server hosting the
              cross-origin resource, in order to check that the server will
              permit the actual request. In that preflight, the browser sends
              headers that indicate the HTTP method and headers that will be
              used in the actual request.
            </Timeline.Body>
            <Button color="gray">
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS"
                target="blank"
              >
                Learn More
              </a>
              <FaArrowRight />
            </Button>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Point />
          <Timeline.Content>
            <Timeline.Time>March 2022</Timeline.Time>
            <Timeline.Title>
              Why are you using 'firebase'? What other options do you have to
              implement authentication?
            </Timeline.Title>
            <Timeline.Body>
              Google Firebase offers many features that pitch it as the go-to
              backend development tool for web and mobile apps. It reduces
              development workload and time. And it's a perfect prototyping
              tool. Firebase is simple, lightweight, friendly, and industrially
              recognized.Indeed, Firebase is a less technical and time-saving
              alternative to writing full-fledged backend code for dynamic apps.
              You might also want to consider leveraging this tool if you
              eventually wish to host and manage your app in the cloud. Being
              serverless, Firebase removes the need to worry about the
              technicalities of cloud server configuration.
              <br />
              As a Google Cloud service, it also gives you access to other
              Google products and features, like Google Drive and Sheets. For
              instance, you can import dummy data from Google Sheets and use it
              temporarily to serve your app.
              <br />
              <br />
              <span className="font-bold">User Authentication Platforms:</span>
              <ul>
                <li>Ory</li>
                <li>Okta</li>
                <li>Supabase</li>
                <li>STYTCH</li>
                <li>OneLogin</li>
                <li>Cognito</li>
                <li>Amazon</li>
                <li>PingIdentity</li>
                <li>Authress</li>
                <li>Frontegg</li>
                <li>Keycloak</li>
                <li>Auth0</li>
                <li>Platforms</li>
              </ul>
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Point />
          <Timeline.Content>
            <Timeline.Time>April 2022</Timeline.Time>
            <Timeline.Title>How does the private route work?</Timeline.Title>
            <Timeline.Body>
              Private Routes in React Router (also called Protected Routes)
              require a user being authorized to visit a route (read: page). So
              if a user is not authorized for a specific page, they cannot
              access it. The most common example is authentication in a React
              application where a user can only access the protected pages when
              they are authorized (which means in this case being
              authenticated). Authorization goes beyond authentication though.
              For example, a user can also have roles and permissions which give
              a user access to specific areas of the application.
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Point />
          <Timeline.Content>
            <Timeline.Time>September 2022</Timeline.Time>
            <Timeline.Title>What is Node? How does Node work?</Timeline.Title>
            <Timeline.Body>
              Get started with dozens of web components and interactive elements
              built on top of Tailwind CSS.
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
      </Timeline>
    </div>
  );
};

export default Blogs;
