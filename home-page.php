<?php 
/**
 * Template Name: Home
 *
 * A custom page template for homepage
 *
 * The "Template Name:" bit above allows this to be selectable
 * from a dropdown menu on the edit page screen.
 *
 * @package WordPress
 * @subpackage Madavi
 * @since Madavi 1.0
 */

get_header(); ?>

<?php if ( have_posts() ) while ( have_posts() ) : the_post(); ?>

<div class="container_12">
	<div class="home_form">
		<h1><?php echo mytheme_option('h1_tagline')?></h1>
		<p><?php echo mytheme_option('p_tagline')?></h1>	

		<form method="post" class="af-form-wrapper" action="http://www.aweber.com/scripts/addlead.pl">
			<div style="display: none;">
                <input type="hidden" name="meta_web_form_id" value="1005915539" />
                <input type="hidden" name="meta_split_id" value="" />
                <input type="hidden" name="listname" value="afv_express" />
                <input type="hidden" name="redirect" value="http://www.aweber.com/thankyou-coi.htm?m=text" id="redirect_00a8f43b4831ae655fe2c373116bf055" />
                <input type="hidden" name="meta_adtracking" value="AFV_Express_Needs_Assessment_Welcome" />
                <input type="hidden" name="meta_message" value="1" />
                <input type="hidden" name="meta_required" value="email" />
                <input type="hidden" name="meta_tooltip" value="" />
            </div>
			<p>Get a <span class="free">free</span> consultation</p>
			<input class="text" id="awf_field-25786678" type="text" name="email" tabindex="502" value="Enter your e-mail" />
			<input type="submit" value="Get started">
		</form>
	</div>

	<div class="customers">
		<?php 
			$page_id = 518; 
			$page_data = get_page( $page_id );
			$content = apply_filters('the_content', $page_data->post_content);
			echo $content; 
		?>
	</div>

	<div class="home_content">
		<?php the_content(); ?>
	</div>

	<div class="slider">
		<?php 
			$page_id = 83; 
			$page_data = get_page( $page_id );
			$content = apply_filters('the_content', $page_data->post_content);
			echo $content; 
		?>
	</div>

	<div class="testimony">
		<?php 
			$page_id = 85; 
			$page_data = get_page( $page_id );
			$content = apply_filters('the_content', $page_data->post_content);
			echo $content;
		?> 
	</div>
</div>

<div class="latest_posts_bg">
	<div class="container_12">
		<div class="latest_posts">
			<h2>On the Blog</h2>
			<ul>
			<?php 

			$custom_loop = new WP_Query('showposts=3&orderby=date');
			if ( $custom_loop->have_posts() ) :
				while ( $custom_loop->have_posts() ) : $custom_loop->the_post();
			?>
				<li>
					<h3>
					<a href="<?php echo get_permalink(); ?>">
						<?php echo get_the_title(); ?>
					</a>
					</h3>
					<p class="date">
						<?php echo the_time(get_option('date_format')); ?>
					</p>
					<?php the_excerpt(); ?>
				</li>
			<?php 
				endwhile;
				wp_reset_query();
			endif;
			?>
			</ul>
			<div class="clear"></div>
		</div>
	</div>
</div>	
<?php endwhile; ?>
<?php get_footer(); ?>