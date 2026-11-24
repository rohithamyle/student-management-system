
function StudentList() {
  const students = [
    { roll: 101, name: "Rahul", marks: 85 },
    { roll: 102, name: "Priya", marks: 35 },
    { roll: 103, name: "Arjun", marks: 72 },
    { roll: 104, name: "Sneha", marks: 25 },
    { roll: 105, name: "Kiran", marks: 90 }
  ];

  return (
    <div>
      <h2>Student Details</h2>

      <table border="1">
        <tr>
          <th>Roll Number</th>
          <th>Name</th>
          <th>Marks</th>
          <th>Result</th>
        </tr>

        {students.map((student) => (
          <tr key={student.roll}>
            <td>{student.roll}</td>
            <td>{student.name}</td>
            <td>{student.marks}</td>
            <td>
              {student.marks >= 40 ? "Pass" : "Fail"}
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default StudentList;
