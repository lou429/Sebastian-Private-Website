import react, {useState, useEffect} from 'react';
import DirectionButton from './changelogButtons';
import VersionPageCount from './VersionPageCount';
import './Changelog-Version.scss'

const tempArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function ChangelogVersion(props) {
    
    function directionClickCallback(t) {
        // setCurrentListIndex(currentListIndex + (t ? 1 : -1))
    }

    return(
        <table className="changelog-version-wrapper">
            <thead>
                <tr>
                    <th className="changelog-version-name-column">
                         Version name
                    </th>
                    <th className="changelog-version-number-column">
                        Version number 
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>
                        test version 
                    </th>
                    <th>
                        1.00 
                    </th>
                </tr>
                <tr>
                    <th>
                        test version 
                    </th>
                    <th>
                        1.00 
                    </th>
                </tr>
                <tr>
                    <th>
                        test version 
                    </th>
                    <th>
                        1.00 
                    </th>
                </tr>
                <tr>
                    <th>
                        test version 
                    </th>
                    <th>
                        1.00 
                    </th>
                </tr>
                <tr>
                    <th>
                        test version 
                    </th>
                    <th>
                        1.00 
                    </th>
                </tr>
                <tr>
                    <th>
                        test version 
                    </th>
                    <th>
                        1.00 
                    </th>
                </tr>
                <tr>
                    <th>
                        test version 
                    </th>
                    <th>
                        1.00 
                    </th>
                </tr>
                <tr>
                    <th>
                        test version 
                    </th>
                    <th>
                        1.00 
                    </th>
                </tr>
                <tr>
                    <th>
                        test version 
                    </th>
                    <th>
                        1.00 
                    </th>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                <th>
                <DirectionButton direction="Left" onClick={directionClickCallback(true)}/>
                </th>
                </tr>
                <tr>
                <th>
                <VersionPageCount />
                </th>
                </tr>
                <tr>
                    <th>
                <DirectionButton direction="Right" onClick={directionClickCallback(false)}/>
                    </th>
                </tr>
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