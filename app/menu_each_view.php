<?php  require_once('appvars.php');
		       
		        $son = new mysqli('localhost','root','root', 'burrito');
		        $select1 = $son->query("SELECT  id, foto, types, name, value, ingredients, weight  FROM maincoarse WHERE types = 'Appetizers' LIMIT 180");
		        $select2 = $son->query("SELECT  id, foto, types, name, value, ingredients, weight  FROM maincoarse WHERE types = 'Main dishes' LIMIT 180");
		        $select3 = $son->query("SELECT  id, foto, types, name, value, ingredients, weight  FROM maincoarse  WHERE types = 'Desserts' ORDER BY name");
		        $appetizers = 'Appetizers';
		        $maindishes = 'Main Dishes';
		        $desserts = 'Desserts';
		        $ex = 'Extras';
		        $bev = 'Beverages';
		       
                

                
if ($_GET["size"] == "appetizers") {
	echo'<div class="menu-products__subtitle whitecolor size35px fontArial text-center">' .$appetizers.'</div>';
	while($info = $select1->fetch_array()){
    	echo'<div class="block-product d-flex justify-content-center">
		    <div class="block-product-left d-flex justify-content-center">
		    	<div class="block-product-left__img"><img src="'.MM_UPLOADPATH. $info['foto'].'"  alt="" /></div></div>';
                echo'<div class="block-product-right d-flex flex-column  col-lg-4 justify-content-center">
		    	<div class="block-product-right-title d-flex justify-content-center align-items-center">
		    		<div class="block-product-right-title__name whitecolor fontSans size22px">'.$info['name'].'</div>';
				echo'<div class="block-product-right-title__value whitecolor fontSans size22px">'.$info['value'].'<span>&nbsp;&#8364;</span></div>
		    	</div>';
				echo'<div class="wrap-block-product-right-content d-flex justify-content-center">
		    	<div class="block-product-right-content d-flex justify-content-center align-items-center whitecolor fontLucida">'.$info['ingredients'].'</div></div>';
				
				echo'<div class="block-product-right-gramm whitecolor fontLucida  d-flex justify-content-center">'.$info['weight'].'<span>g</span></div><div class="buttonButton"><div class="block-product-right-form d-flex justify-content-center"><div class="opyt btn btn-primary padding15 size22px">order</div> <div class="button-href">
				        	<div class="wrap-button-minus minus">
				        		<button class="button-minus ui-n3" type="button" tabindex="0">
				        			<div class="button-minus-border" tabindex="-1">
				        				<svg width="24" height="24" class="ui-m9">
				        					<path d="M20 11a1 1 0 010 2H4a1 1 0 010-2h16z" fill="#005bff"></path>
				        				</svg>
				        			</div>
				        		</button>
				        	</div>
				        	<input class="inp_price button-alcogol whitecolor button-span text-center whitecolor size14px d-flex" type="text" value='.$info['id'].'>
				        	<div class="main-button d-flex align-items-center plus">
				        		<div class="wrap-button-minus">
				        			<button class="button-minus button-plus ui-n3" type="button" tabindex="0">
				        				<div class="button-minus-border button-plus" tabindex="-1">
				        					<svg width="24" height="24" class="ui-m9">
				        						<path d="M13 11h7a1 1 0 010 2h-7v7a1 1 0 01-2 0v-7H4a1 1 0 010-2h7V4a1 1 0 012 0v7z" fill="#f2f3f5">
				        						</path>
				        					</svg>
				        					<div class="ui-n1"></div>
				        				</div>
				        			</button>
				        		</div>
				        	</div>
				        </div>
				        </div></div></div>
		    </div>'; }

		}    
	
	
elseif ($_GET["size"] == "maindishes") {
	
	echo'<div class="menu-products__subtitle whitecolor size35px fontArial text-center">' .$maindishes.'</div>';
	while($info = $select2->fetch_array()){
				echo'<div class="block-product d-flex justify-content-center">
		    <div class="block-product-left d-flex justify-content-center">
		    	<div class="block-product-left__img"><img src="'.MM_UPLOADPATH. $info['foto'].'"  alt="" /></div></div>';
                echo'<div class="block-product-right d-flex flex-column  col-lg-4 justify-content-center">
		    	<div class="block-product-right-title d-flex justify-content-center align-items-center">
		    		<div class="block-product-right-title__name whitecolor fontSans size22px">'.$info['name'].'</div>';
				echo'<div class="block-product-right-title__value whitecolor fontSans size22px">'.$info['value'].'<span>&nbsp;&#8364;</span></div>
		    	</div>';
				echo'<div class="wrap-block-product-right-content d-flex justify-content-center">
		    	<div class="block-product-right-content d-flex justify-content-center align-items-center whitecolor fontLucida">'.$info['ingredients'].'</div></div>';
				echo'<div class="block-product-right-gramm whitecolor fontLucida  d-flex justify-content-center">'.$info['weight'].'<span>g</span></div><div class="buttonButton"><div class="block-product-right-form d-flex justify-content-center"><div class="opyt btn btn-primary padding15 size22px">order</div> <div class="button-href">
				        	<div class="wrap-button-minus minus">
				        		<button class="button-minus ui-n3" type="button" tabindex="0">
				        			<div class="button-minus-border" tabindex="-1">
				        				<svg width="24" height="24" class="ui-m9">
				        					<path d="M20 11a1 1 0 010 2H4a1 1 0 010-2h16z" fill="#005bff"></path>
				        				</svg>
				        			</div>
				        		</button>
				        	</div>
				        	<input class="inp_price button-alcogol whitecolor button-span text-center whitecolor size14px d-flex" type="text" value='.$info['id'].'>
				        	<div class="main-button d-flex align-items-center plus">
				        		<div class="wrap-button-minus">
				        			<button class="button-minus button-plus ui-n3" type="button" tabindex="0">
				        				<div class="button-minus-border button-plus" tabindex="-1">
				        					<svg width="24" height="24" class="ui-m9">
				        						<path d="M13 11h7a1 1 0 010 2h-7v7a1 1 0 01-2 0v-7H4a1 1 0 010-2h7V4a1 1 0 012 0v7z" fill="#f2f3f5">
				        						</path>
				        					</svg>
				        					<div class="ui-n1"></div>
				        				</div>
				        			</button>
				        		</div>
				        	</div>
				        </div>
				        </div></div></div>
		    </div>';
		}
	  }
elseif ($_GET["size"] == "desserts") {
	echo'<div class="menu-products__subtitle whitecolor size35px fontArial text-center">' .$desserts.'</div>';
	while($info = $select3->fetch_array()){
				echo'<div class="block-product d-flex justify-content-center">
		    <div class="block-product-left d-flex justify-content-center">
		    	<div class="block-product-left__img"><img src="'.MM_UPLOADPATH. $info['foto'].'"  alt="" /></div></div>';
                echo'<div class="block-product-right d-flex flex-column  col-lg-4 justify-content-center">
		    	<div class="block-product-right-title d-flex justify-content-center align-items-center">
		    		<div class="block-product-right-title__name whitecolor fontSans size22px">'.$info['name'].'</div>';
				echo'<div class="block-product-right-title__value whitecolor fontSans size22px">'.$info['value'].'<span>&nbsp;&#8364;</span></div>
		    	</div>';
				echo'<div class="wrap-block-product-right-content d-flex justify-content-center">
		    	<div class="block-product-right-content d-flex justify-content-center align-items-center whitecolor fontLucida">'.$info['ingredients'].'</div></div>';
				echo'<div class="block-product-right-gramm whitecolor fontLucida  d-flex justify-content-center">'.$info['weight'].'<span>g</span></div><div class="buttonButton"><div class="block-product-right-form d-flex justify-content-center"><div class="opyt btn btn-primary padding15 size22px">order</div> <div class="button-href">
				        	<div class="wrap-button-minus minus">
				        		<button class="button-minus ui-n3" type="button" tabindex="0">
				        			<div class="button-minus-border" tabindex="-1">
				        				<svg width="24" height="24" class="ui-m9">
				        					<path d="M20 11a1 1 0 010 2H4a1 1 0 010-2h16z" fill="#005bff"></path>
				        				</svg>
				        			</div>
				        		</button>
				        	</div>
				        	<input class="inp_price button-alcogol whitecolor button-span text-center whitecolor size14px d-flex" type="text" value="0" name='.$info['id'].'>
				        	<div class="main-button d-flex align-items-center plus">
				        		<div class="wrap-button-minus">
				        			<button class="button-minus button-plus ui-n3" type="button" tabindex="0">
				        				<div class="button-minus-border button-plus" tabindex="-1">
				        					<svg width="24" height="24" class="ui-m9">
				        						<path d="M13 11h7a1 1 0 010 2h-7v7a1 1 0 01-2 0v-7H4a1 1 0 010-2h7V4a1 1 0 012 0v7z" fill="#f2f3f5">
				        						</path>
				        					</svg>
				        					<div class="ui-n1"></div>
				        				</div>
				        			</button>
				        		</div>
				        	</div>
				        </div>
				        </div></div></div>
		    </div>';
		}}?>
		<script src="js/app.min.js"></script>
		 <script src="js/plus-minus.js"></script>
		 <script src="js/menu.js"></script>
		 