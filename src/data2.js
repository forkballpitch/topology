export default [
  {
    group: "nodes",
    data: {
      id: "n0",
      displayName: "service name very long",
      kind: "NetworkService",
      operationalState: "Working",
      alarmSeverity: "cleared"
    },
    classes: "nodeIcon"
  },
  {
    group: "nodes",
    data: {
      id: "group1",
      name: "group1"
    },
    classes: "groupIcon"
  },
  {
    group: "nodes",
    data: {
      id: "n1.1",
      displayName: "n1.1",
      kind: "VNF",
      parent: "group1",
      operationalState: "Working",
      alarmSeverity: "cleared"
    },
    classes: "nodeIcon"
  },
  {
    group: "nodes",
    data: {
      id: "n1.2",
      displayName: "n1.2",
      kind: "TelcoCloudVirtualDevice",
      parent: "group1",
      operationalState: "Working",
      alarmSeverity: "warning"
    },
    classes: "nodeIcon"
  },
  {
    group: "nodes",
    data: {
      id: "n1.3",
      displayName: "n1.3",
      kind: "VNF",
      parent: "group1",
      operationalState: "notWorking",
      alarmSeverity: "critical"
    },
    classes: "nodeIcon"
  },
  /*{
    group: "nodes",
    data: {
      id: "group2",
      name: "group2"
    },
    classes: "groupIcon"
  },*/
  {
    group: "nodes",
    data: {
      id: "n2.1",
      displayName: "n2.1",
      kind: "TelcoCloudPhysicalDevice",
      //parent: "group2",
      operationalState: "Working",
      alarmSeverity: "cleared"
    },
    classes: "nodeIcon"
  },
  {
    group: "nodes",
    data: {
      id: "n2.2",
      displayName: "n2.2",
      kind: "VNF",
      //parent: "group2",
      operationalState: "Working",
      alarmSeverity: "cleared"
    },
    classes: "nodeIcon"
  },
  {
    group: "nodes",
    data: {
      id: "n2.3",
      displayName: "n2.3",
      kind: "TelcoCloudPhysicalDevice",
      //parent: "group2",
      operationalState: "Working",
      alarmSeverity: "critical"
    },
    classes: "nodeIcon"
  },
  {
    group: "nodes",
    data: {
      id: "n2.4",
      displayName: "n2.4",
      kind: "VNF",
      //parent: "group2",
      operationalState: "Working",
      alarmSeverity: "minor"
    },
    classes: "nodeIcon"
  },
  {
    group: "nodes",
    data: {
      id: "n2.5",
      displayName: "n2.5",
      kind: "TelcoCloudVirtualDevice",
      //parent: "group2",
      operationalState: "Working",
      alarmSeverity: "major"
    },
    classes: "nodeIcon"
  },
  {
    group: "nodes",
    data: {
      id: "n2.6",
      displayName: "n2.6",
      kind: "TelcoCloudVirtualDevice",
      //parent: "group2",
      operationalState: "Working",
      alarmSeverity: "cleared"
    },
    classes: "nodeIcon"
  },
  {
    group: "nodes",
    data: {
      id: "group3",
      name: "group3"
    },
    classes: "groupIcon"
  },
  {
    group: "nodes",
    data: {
      id: "n3.1",
      displayName: "n3.1",
      kind: "TelcoCloudVirtualDevice",
      parent: "group3",
      operationalState: "Working",
      alarmSeverity: "cleared"
    },
    classes: "nodeIcon"
  },
  {
    group: "nodes",
    data: {
      id: "n3.2",
      displayName: "n3.2",
      kind: "VNF",
      parent: "group3",
      operationalState: "Working",
      alarmSeverity: "cleared"
    },
    classes: "nodeIcon"
  },

  { data: { group: "edges", source: "n0", target: "n1.1" } },
  { data: { group: "edges", source: "n0", target: "n1.3" } },
  { data: { group: "edges", source: "n1.1", target: "n1.2" } },
  { data: { group: "edges", source: "n0", target: "n3.2" } },
  { data: { group: "edges", source: "n3.2", target: "n3.1" } },
  { data: { group: "edges", source: "n0", target: "n2.2" } },
  { data: { group: "edges", source: "n0", target: "n2.4" } },
  { data: { group: "edges", source: "n2.4", target: "n2.6" } },
  { data: { group: "edges", source: "n2.5", target: "n2.1" } },
  { data: { group: "edges", source: "n2.4", target: "n2.5" } },
  { data: { group: "edges", source: "n2.5", target: "n2.3" } }
];
