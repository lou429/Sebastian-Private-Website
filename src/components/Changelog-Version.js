import react from 'react';
import './Changelog-Version.scss'

function ChangelogVersion(props) {
    return(
        <table className="changelog-version-wrapper">
            <tr>
                <th>
                    Version number
                </th>
            </tr>
            <tr>
                <td>
                    num 1
                </td>
                {props.data.forEach((verNum) => {
                    <td>
                        {verNum}
                    </td>
                })}
            </tr>
        </table>
    );
}

export default ChangelogVersion;