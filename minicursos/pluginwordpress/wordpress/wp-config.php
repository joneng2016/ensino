<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wordpress' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'positivo' );

/** Database hostname */
define( 'DB_HOST', '127.0.0.1' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '5QvhX+)5*91@NUq/=Kv-5WWoV;G_X_%#e~7IASqp>*_jo7|o{<-rw[JYN!r.&T*N' );
define( 'SECURE_AUTH_KEY',  '2S?P5GY*S*uxqdYyoB!9,]G)At>;{F:-@ Y.Gu(M v=f:EX#wJ&q&&Zz;jY}BPVs' );
define( 'LOGGED_IN_KEY',    'gk{2lRLhC.&wBW;pU% XcD-O5;NU9rb%dQblT~;F,$J]mWS_AQb(c5@:Q`4V0e!#' );
define( 'NONCE_KEY',        '$1:}mXSmK8vErNiTunuOAy}DRauF7wxc<,Y%kV,S`2mr8ayL<1t#Sv5oN^==~GO*' );
define( 'AUTH_SALT',        ',FoBC$)wHmp+i}zKHIkx.*^:~-wxRp]F3n3b(0P!N_OCx-WL)(essB uMm1NS0S,' );
define( 'SECURE_AUTH_SALT', '}9RA7JYR75LpYzc^aBCP`em0m~-aF{}IQ<{1!IC1|HyiQ^YZvav<(ESi,]X,nOp>' );
define( 'LOGGED_IN_SALT',   '$_KQnqv@dHt}yZ=Y]8!<qW{LvNMt19LbW!p1D<#+je}Ywx%n[fIhT60RIr/8)Oe%' );
define( 'NONCE_SALT',       '(b=!;CEP yiC5x$7FNc+9SytyTyjkZ:!OV)QJXG$rl6;7VdJ(_wyo we?&&$^NG4' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
