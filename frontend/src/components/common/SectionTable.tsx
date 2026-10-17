import { Table } from "antd";
import React from "react";
import type { ReactNode } from "react";

interface SectionTableProps {
  extra?: ReactNode;
  tableComponent?: ReactNode;
  columns?: any;
  dataSource?: any;
}
const SectionTable = (props: SectionTableProps) => {
  const { extra, tableComponent, columns, dataSource } = props;

  return (
    <>
      <Table columns={columns} dataSource={dataSource} />
    </>
  );
};
export default SectionTable;
