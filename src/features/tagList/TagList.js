import React, { } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  selectCheckedTags, selectTags, setSelectedTags, setTagListSearchKey,
} from './tagListSlice';
import styles from './TagList.module.css';

const TagList = () => {
  const tagList = useSelector(selectTags);
  const selectedTags = useSelector(selectCheckedTags) || [];

  const dispatch = useDispatch();

  console.log(selectedTags)

  return (
    <div>
      <h2 className={styles.title}>Tags</h2>
      <div className={styles.body}>
        <div className={styles.inputWrapper}>
          <input className={styles.input} placeholder="Search brand" type="text" onChange={(e) => dispatch(setTagListSearchKey(e.target.value))} />
        </div>
        <div className={styles.taglist}>
          {
            tagList.map((tag) => (
              <div className={styles.wrapper} key={tag.name}>
                <label>
                  <input
                    type="checkbox"
                    value={tag.name}
                    checked={selectedTags.includes(tag.name)}
                    onChange={(e) => dispatch(setSelectedTags(e.target.value))}
                  />
                  <span className={styles.name}>{tag.name}</span>
                  <span className={styles.name}>&nbsp;({tag.count})</span>
                </label>
              </div>
            ))
          }
        </div>
      </div>

    </div>
  );
};

export default TagList;
