db.people.aggregate({
$group: {_id: "$sex",
avgH: {$avg: {$toDouble: "$height"}},
avgW: {$avg: {$toDouble: "$weight"}}}})