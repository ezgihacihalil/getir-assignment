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

  return (
    <div>
      <h2 className={styles.title}>Tags</h2>
      <div className={styles.body}>
        <div className={styles.inputWrapper}>
          <input className={styles.input} placeholder="Search brand" type="text" onChange={(e) => dispatch(setTagListSearchKey(e.target.value))} />
        </div>
        <div className={styles.taglist}>
          {
            Object.keys(tagList).map((tag) => (
              <div className={styles.wrapper} key={tag}>
                <label>
                  <input
                    type="checkbox"
                    value={tag}
                    checked={selectedTags.includes(tag)}
                    onChange={(e) => dispatch(setSelectedTags(e.target.value))}
                  />
                  <span className={styles.name}>{tag}</span>
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
