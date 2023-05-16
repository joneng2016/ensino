```

select
	*
from 
	city
where city_id in (
	select
		address_id
	from 
		address
	where
		address_id IN (
			select
				address_id
			from 
				inventory
			where
				inventory_id in (
					select
						inventory_id
					from
						inventory
					where
						film_id IN (
							select 
								film_id
							from 
								film_actor
							where
								actor_id IN (
									select 
										actor_id 
									from 
										actor a 
									where
										(first_name like "%NIFER%" and last_name like "%DAV%") or 
										(first_name like "%NNY%" and last_name like "%LLOBR%" ) or
										(first_name like "%TT%" and last_name like "%HOLSON%") or
										(first_name like "%ACE%" and last_name like "%OST%") or
										(first_name like "%THE%" and last_name like "%OHANSSO%") or
										(first_name like "%O%" and last_name like "%SW%") or
										(first_name like "%ISTIAN%" and last_name like "%GAB%") or
										(first_name like "%EO%" and last_name like "%CAG%")
								)
					)
			)
	)
);
```
