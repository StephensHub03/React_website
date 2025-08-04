import React from 'react'


const tableHeading= [
    {
    colName:"Avatar",
    icon:"👤",
},
    {
    colName:"Name",
    icon:"📛",
},
    {
    colName:"Status",
    icon:"✅",
},
];

const tableData=[
    {
     avatar: "/gitlab.svg",
     name:"Zara",
     status:"Active",
    },
        {
     avatar: "/gitlab.svg",
     name:"Zayn",
     status:"Inactive",
    },
]

const Table = () => {
  return (
    <div className="containe mx-auto p-6 ">
   <h1 className='font-bold text-xl p-4'>📊User Data</h1>
   <table  className='min-w-full border border-collapse'>
<thead className='border border-collapse'>
    <tr>
        {tableHeading.map((heading) =>
        (
            <th key ={heading.colName} className='border border-gray-600 px-4 py-2 bg-slate-400' >
                {heading.icon} {heading.colName}
            </th>
        ))}
    </tr>
</thead>
<tbody>
    {tableData.map((row,index)=>(
        <tr key={index}>
            <td className='border px4 py-2 flex justify-center'>
                <img src ="data:image/jpeg;base64,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" className="h-8 w-8 rounded-full"/>
            </td>
            <td  className="border px-4 py-2 font-bold">
            {row.name}
            </td>
          <td
  className={`border px-4 py-2 font-bold ${
    row.status === "Active" ? "text-green-600" : "text-red-600"
  }`}
>
  {row.status}
</td>
        </tr>
    ))}
</tbody>
   </table>
   </div>
  )
}

export default Table