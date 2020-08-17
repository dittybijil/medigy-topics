import pkg from 'graphql-request';
const { request, gql } = pkg;

export default {
  getTopics: () => {
    const JsonUrl = 'https://service.ontology.attest.cloud/';
    const query = gql`
      {
        getClassHierarchy(rootClassName: "Collection", searchParam: "") {
          label
          classname
          parentclassname
          parentclasslabel
        }
      }
    `;

    return request('https://service.ontology.attest.cloud/', query);
  },
};
