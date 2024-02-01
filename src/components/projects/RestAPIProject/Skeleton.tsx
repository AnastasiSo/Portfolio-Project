const Skeleton = ({ item }) => {
  return [...Array(item).keys()].map(() => (
    <div className="skeleton-items">
      <div className="skeleton-item"></div>
    </div>
  ));
};
export default Skeleton;
