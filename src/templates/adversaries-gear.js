import { graphql } from "gatsby"
import React from "react"

import Dashboard from "../components/shared/Dashboard"
import IndividualCard from "../components/shared/IndividualCard"

export default ({ data, location }) => {
  return (
    <Dashboard>
      <IndividualCard
        item={data.adversariesGearYaml}
        resourceType="Adversary Gear"
        location={location}
      />
    </Dashboard>
  )
}

export const query = graphql`
  query($generatedId: String!) {
    adversariesGearYaml(generatedId: { eq: $generatedId }) {
      name
      index
    }
  }
`
