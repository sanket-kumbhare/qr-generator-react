const TableRow = ({ id, std_name, url_code, qr_code }) => {
  return (
    <tr className="text-center align-middle">
      <td>{id}</td>
      <td>{std_name}</td>
      <td>{url_code}</td>
      <td>
        <img src={qr_code} alt="" />
      </td>
      <td>
        <a className="btn btn-success" href={qr_code} download={std_name}>
          Download <i class="bi bi-download"></i>
        </a>
      </td>
    </tr>
  );
};

export default TableRow;
