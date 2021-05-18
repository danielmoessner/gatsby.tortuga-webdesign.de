import React from "react";
import { Link, StaticQuery, graphql } from "gatsby";
import Container from "./Container";
import ChildrenData from "../types/ChildrenData";

function Layout({ children }) {
  return (
    <div>
      <Container>
        <header className="pb-3 pt-5">
          <div className="flex justify-between border-b pb-3">
            <Link to="/">
              <h1 className="text-3xl font-bold tracking-tight leading-tight text-gray-700 hover:text-gray-800 transition ease-in-out duration-150">
                <StaticQuery
                  query={graphql`
                    {
                      settingsYaml {
                        navigationTitle
                      }
                    }
                  `}
                  render={(data) => data.settingsYaml.navigationTitle}
                />
              </h1>
            </Link>
          </div>
        </header>
      </Container>
      <Container>
        <main className="pt-5 pb-20">{children}</main>
      </Container>
    </div>
  );
}

Layout.propTypes = {
  children: ChildrenData.isRequired,
};

export default Layout;
