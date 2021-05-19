import react, {useState, useEffect} from 'react';
import DirectionButton from './changelogButtons';
import VersionPageCount from './VersionPageCount';
import './Changelog-Version.scss'

const tempArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function ChangelogVersion(props) {
    const [versionList, setVersionList] = useState([]);
    const [currentList, setCurrentList] = useState([]);
    const [currentListIndex, setCurrentListIndex] = useState(0);
    const pagesPerTable = 10;

    useEffect(function updateVersionInfoArray() {
        setCurrentList(versionList.splice(currentList - 1 * pagesPerTable, currentList * pagesPerTable))
    }, [currentList, versionList]);

    setVersionList(props.versionList);
    
    function directionClickCallback(t) {
        setCurrentListIndex(currentListIndex + (t ? 1 : -1))
    }

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
                    {currentList.forEach((verNum) => {
                        <td>
                            {verNum}
                        </td>
                    })}
                </tr>
            </tbody>
            <tfoot>
                <DirectionButton direction="Left" onClick={directionClickCallback(true)}/>
                <VersionPageCount />
                <DirectionButton direction="Right" onClick={directionClickCallback(false)}/>
            </tfoot>
        </table>
    );
}

class PageCount {
    constructor(array) {
        this.currentPage = array[0];
        this.count = array[1];
    }
}

export default ChangelogVersion;