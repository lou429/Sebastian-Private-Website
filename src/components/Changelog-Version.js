import react from 'react';
import DirectionButton from './changelogButtons';
import './Changelog-Version.scss'

const tempArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function ChangelogVersion(props) {
    return(
        <table className="changelog-version-wrapper">
            <thead>
                <tr>
                    <th>
                        Version number
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    {/* {props.data.forEach((verNum) => { */}
                    {tempArr.forEach((verNum) => {
                        <td>
                            {verNum}
                        </td>
                    })}
                </tr>
            </tbody>
            <tfoot>
                <DirectionButton direction="Left"/>
                <h6>
                    1/1
                </h6>
                <DirectionButton direction="Right"/>
            </tfoot>
        </table>
    );
}

export default ChangelogVersion;