const PolicyDetails = (props) => {
  const policyData = props.policyData;
  return (
    <>
      <div className="table-auto md:table-fixed pt-5">
        {Object.entries(policyData).length !== 0 ? (
          <>
            <table className="w-full border-collapse border border-gray-400 bg-white text-sm dark:border-gray-500 dark:bg-gray-800">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th className="w-0 border border-gray-300 p-4 text-left font-semibold text-gray-900 dark:border-gray-600 dark:text-gray-200">
                    Key
                  </th>
                  <th className="w-1/2 border border-gray-300 p-4 text-left font-semibold text-gray-900 dark:border-gray-600 dark:text-gray-200">
                    Value
                  </th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(policyData).map(([key, value]) => (
                <tr key={key}>
                  <td className="border border-gray-300 p-4 text-gray-500 dark:border-gray-700 dark:text-gray-400">
                    {key}
                  </td>
                  <td className="border border-gray-300 p-4 text-gray-500 dark:border-gray-700 dark:text-gray-400">
                    {value}
                  </td>
                </tr>
                ))}
              </tbody>
            </table>
          </>
        ) : (
          <div className="text-xl text-red-700">No data found</div>
        )}

        {/* <tr>
              <td className="border border-gray-300 p-4 text-gray-500 dark:border-gray-700 dark:text-gray-400">Ohio</td>
              <td className="border border-gray-300 p-4 text-gray-500 dark:border-gray-700 dark:text-gray-400">Columbus</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-4 text-gray-500 dark:border-gray-700 dark:text-gray-400">Michigan</td>
              <td className="border border-gray-300 p-4 text-gray-500 dark:border-gray-700 dark:text-gray-400">Detroit</td>
            </tr> */}
      </div>
    </>
  );
};
export default PolicyDetails;
