import React, { useState } from 'react'
import 'antd/dist/antd.css';
import { Table, Select, DatePicker, Button, Input } from 'antd'
import "./TimeSheetTable.css"

const { Option } = Select

const dateData = [
  {
    date: "Sun 2021/10/02",
    isHoliday: true
  },
  {
    date: "Mon 2021/10/03",
    isHoliday: false
  },
  {
    date: "Tue 2021/10/04",
    isHoliday: false
  },
  {
    date: "Wed 2021/10/05",
    isHoliday: false
  },
  {
    date: "Thu 2021/10/06",
    isHoliday: false
  },
  {
    date: "Fri 2021/10/07",
    isHoliday: false
  },
  {
    date: "Sat 2021/10/08",
    isHoliday: true
  },
]

const projectLabel = [
  {
    label: "APRD",
    value: "APRD"
  },
  {
    label: "EcoMart",
    value: "EcoMart"
  },
  {
    label: "KOC",
    value: "KOC"
  },
]

const workDetail = [
  {
    label: "Coding",
    value: "Coding"
  },
  {
    label: "Meeting",
    value: "Meeting"
  },
  {
    label: "Holiday",
    value: "Holiday"
  },
  {
    label: "Other",
    value: "Other"
  },
]

const mockDataSource = [
  {
    key: 1,
    projectLabel: 'APRD',
    workDetail: "Coding",
    remark: '頁面開發',
    date:
    {
      "Mon 2021/10/03": 1,
      "Wed 2021/10/05": 5,
      "Thu 2021/10/06": 1
    },
    time: 7
  },
  {
    key: 2,
    projectLabel: 'EcoMart',
    workDetail: "Meeting",
    remark: '業務需求會議',
    date:
    {
      "Tue 2021/10/04": 5.5,
      "Wed 2021/10/05": 1,
      "Mon 2021/10/03": 3,
      "Fri 2021/10/07": 1,
    },
  },
  {
    key: 3,
    projectLabel: 'KOC',
    workDetail: "Other",
    remark: '架構、技術學習',
    date:
    {
      "Fri 2021/10/07": 1,
      "Wed 2021/10/05": 5,
      "Tue 2021/10/04": 2
    },
  },
];

const TableSummary = ({ pageData }) => {
  const setDateHours = (weekDate) => {
    const hasData = pageData?.filter((item) => { if (item.date) { return item?.date[weekDate] } })
    if (hasData.length > 0) {
      return hasData?.map(item => (item.date[weekDate]))?.reduce((a, b) => a + b)
    }
    return 0
  }

  const SunDayData = setDateHours(dateData[0].date)
  const MondayData = setDateHours(dateData[1].date)
  const TuesdayData = setDateHours(dateData[2].date)
  const WednesdayData = setDateHours(dateData[3].date)
  const ThursdayData = setDateHours(dateData[4].date)
  const FridayData = setDateHours(dateData[5].date)
  const SaturdayData = setDateHours(dateData[6].date)

  const totalTime = [SunDayData, MondayData, TuesdayData, WednesdayData, ThursdayData, FridayData, SaturdayData].reduce((a, b) => a + b)


  return (
    <>
      {/* 第一排 */}
      <Table.Summary.Row>
        {/* 佔空間 */}
        <Table.Summary.Cell></Table.Summary.Cell>
        <Table.Summary.Cell></Table.Summary.Cell>
        <Table.Summary.Cell></Table.Summary.Cell>
        {/* 佔空間 */}
        <Table.Summary.Cell style={{ textAlign: "right" }}>Work hours</Table.Summary.Cell>
        <Table.Summary.Cell>
          <div>{SunDayData}</div>
        </Table.Summary.Cell>
        <Table.Summary.Cell>
          <div>{MondayData}</div>
        </Table.Summary.Cell>
        <Table.Summary.Cell>
          <div>{TuesdayData}</div>
        </Table.Summary.Cell>
        <Table.Summary.Cell>
          <div>{WednesdayData}</div>
        </Table.Summary.Cell>
        <Table.Summary.Cell>
          <div>{ThursdayData}</div>
        </Table.Summary.Cell>
        <Table.Summary.Cell>
          <div>{FridayData}</div>
        </Table.Summary.Cell>
        <Table.Summary.Cell>
          <div>{SaturdayData}</div>
        </Table.Summary.Cell>
        <Table.Summary.Cell>
          <div>{totalTime}</div>
        </Table.Summary.Cell>
      </Table.Summary.Row>
      {/* 第二排 */}
      <Table.Summary.Row>
        {/* 佔空間 */}
        <Table.Summary.Cell></Table.Summary.Cell>
        <Table.Summary.Cell></Table.Summary.Cell>
        <Table.Summary.Cell></Table.Summary.Cell>
        {/* 佔空間 */}
        <Table.Summary.Cell style={{ textAlign: "right" }}>Total</Table.Summary.Cell>
        <Table.Summary.Cell >
          <div>{ }</div>
        </Table.Summary.Cell>
      </Table.Summary.Row>
    </>
  )
}

const TimeSheetTable = () => {

  const [dataSource, setDataSource] = useState(mockDataSource)

  const columns = [
    {
      title: 'Project Labels',
      dataIndex: 'projectLabel',
      key: 'projectLabel',
      width: "150px",
      render: (record => {
        return (
          <Select
            style={{ width: 120 }}
            defaultValue={record}
          >
            {
              projectLabel.map((item) => {
                return (
                  <Option key={item.value} value={item.value}>
                    {item.label}
                  </Option>
                )
              })
            }
          </Select>
        )
      })
    },
    {
      title: 'Detail Work Done',
      dataIndex: 'workDetail',
      key: 'workDetail',
      width: "150px",
      render: (record => {
        return (
          <Select
            style={{ width: 120 }}
            defaultValue={record}
          >
            {
              workDetail.map((item) => {
                return (
                  <Option key={item.value} value={item.value}>
                    {item.label}
                  </Option>
                )
              })
            }
          </Select>
        )
      })
    },
    {
      title: 'Remark',
      dataIndex: 'remark',
      key: 'remark',
      width: "150px",
      render: (record => {
        return (
          <Input
            style={{ width: 120 }}
            defaultValue={record}
          >

          </Input>
        )
      })
    },
    {
      title: (() => {
        const isHoliday = dateData[0].isHoliday
        return (
          <>
            {
              isHoliday ? <div style={{ color: "red" }}>{dateData[0].date}</div> : <div>{dateData[0].date}</div>
            }
          </>
        )
      }),
      dataIndex: ["date", dateData[0].date],
      key: dateData[0].date,
      align: "center",
      width: "50px",
      render: (record => {
        return (
          <Input
            style={{ width: "50px", textAlign: "center" }}
            value={record}
            onChange={(e) => Number(Math.round(e.target.value))}
          />
        )
      })
    },
    {
      title: (() => {
        const isHoliday = dateData[1].isHoliday
        return (
          <>
            {
              isHoliday ? <div style={{ color: "red" }}>{dateData[1].date}</div> : <div>{dateData[1].date}</div>
            }
          </>
        )
      }),
      dataIndex: ["date", dateData[1].date],
      key: dateData[1].date,
      align: "center",
      width: "50px",
      render: (record => {
        return (
          <Input
            style={{ width: "50px", textAlign: "center" }}
            value={record}
            onChange={(e) => Number(Math.round(e.target.value))}
          />
        )
      })
    },
    {
      title: (() => {
        const isHoliday = dateData[2].isHoliday
        return (
          <>
            {
              isHoliday ? <div style={{ color: "red" }}>{dateData[2].date}</div> : <div>{dateData[2].date}</div>
            }
          </>
        )
      }),
      dataIndex: ["date", dateData[2].date],
      key: dateData[2].date,
      align: "center",
      width: "50px",
      render: (record => {
        return (
          <Input
            style={{ width: "50px", textAlign: "center" }}
            value={record}
            onChange={(e) => Number(Math.round(e.target.value))}
          />
        )
      })
    },
    {
      title: (() => {
        const isHoliday = dateData[3].isHoliday
        return (
          <>
            {
              isHoliday ? <div style={{ color: "red" }}>{dateData[3].date}</div> : <div>{dateData[3].date}</div>
            }
          </>
        )
      }),
      dataIndex: ["date", dateData[3].date],
      key: dateData[3].date,
      align: "center",
      width: "50px",
      render: (record => {
        return (
          <Input
            style={{ width: "50px", textAlign: "center" }}
            value={record}
            onChange={(e) => Number(Math.round(e.target.value))}
          />
        )
      })
    },
    {
      title: (() => {
        const isHoliday = dateData[4].isHoliday
        return (
          <>
            {
              isHoliday ? <div style={{ color: "red" }}>{dateData[4].date}</div> : <div>{dateData[4].date}</div>
            }
          </>
        )
      }),
      dataIndex: ["date", dateData[4].date],
      key: dateData[4].date,
      align: "center",
      width: "50px",
      render: (record => {
        return (
          <Input
            style={{ width: "50px", textAlign: "center" }}
            value={record}
            onChange={(e) => Number(Math.round(e.target.value))}
          />
        )
      })
    },
    {
      title: (() => {
        const isHoliday = dateData[5].isHoliday
        return (
          <>
            {
              isHoliday ? <div style={{ color: "red" }}>{dateData[5].date}</div> : <div>{dateData[5].date}</div>
            }
          </>
        )
      }),
      dataIndex: ["date", dateData[5].date],
      key: dateData[5].date,
      align: "center",
      width: "50px",
      render: (record => {
        return (
          <Input
            style={{ width: "50px", textAlign: "center" }}
            value={record}
            onChange={(e) => Number(Math.round(e.target.value))}
          />
        )
      })
    },
    {
      title: (() => {
        const isHoliday = dateData[6].isHoliday
        return (
          <>
            {
              isHoliday ? <div style={{ color: "red" }}>{dateData[6].date}</div> : <div>{dateData[6].date}</div>
            }
          </>
        )
      }),
      dataIndex: ["date", dateData[6].date],
      key: dateData[6].date,
      align: "center",
      width: "50px",
      render: (record => {
        return (
          <Input
            style={{ width: "50px", textAlign: "center" }}
            value={record}
          // onChange={(e) => setDataSource((pre) => [...pre, pre.dateData[6].date = e.target.value])}
          />
        )
      })
    },
    {
      title: "Total",
      key: "Total",
      dataIndex: "date",
      align: "center",
      width: "50px",
      render: (record => {
        let totalTime
        if (record) {
          totalTime = Object?.values(record).reduce((a, b) => a + b)
        }
        return (
          <p style={{ color: "#6D6D6D" }}>{totalTime}</p>
        )
      })
    },
  ];

  const addNewItem = () => {
    const keyNum = dataSource.length + 1
    const newItem = {
      key: keyNum,
      projectLabel: '',
      workDetail: "",
      remark: '',
    }
    setDataSource((pre) => { return [...pre, newItem] })
  }
  return (
    <div className="table">
      <div className="table_header">
        <div className="table_time">
          <p>
            填寫工時
          </p>
        </div>
        <div className="table_picker">
          <DatePicker
            picker="week"
            format="YYYY-MM-DD"
          />
          <Button
            onClick={addNewItem}
          >Add New</Button>
        </div>
      </div>
      <div>
        <Table
          columns={columns}
          dataSource={dataSource}
          pagination={false}
          rowSelection
          summary={(pageData => {
            // const {}
            console.log(pageData)
            return (
              <TableSummary
                pageData={pageData}
              />
            )
          })}
        />
      </div>
    </div >
  )
}


export default TimeSheetTable
