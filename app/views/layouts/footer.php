<footer id="footer" ><!--Footer-->
    <div class="container-fluid wrap-footer-block col-lg-12">
            <div class="footer-block col-lg-12">
                <div class="footer-block1 text-center col-lg-12">
                    <div class="footer-block1__title h1 colorGrey size29px font-weight-bold fonTahoma col-lg-12">Location</div>
                    <div class="footer-block1__content colorGrey  text-center size21px fonTahoma">
                        <p>Moscow, Berzarina street, building 6</p>
                        <p>(510) 647-9525</p>
                        <p><a class="redhover">info@lamarchaberkeley.com</a></p>
                    </div>
                    <div class="footer-block1__button col-lg-12"><button class="btn mybtn size18px"/><a href="#top">reserve</a></button></div>
                </div>
                <div class ="footer-part2 d-flex flex-column col-lg-12 text-center">
 <h2 class="fontTahoma footer-title">Burrito Chili-Bar</h2>
    <div class="footer-part2__text1 fontTahoma colorGrey">
                    5367 Moscow, Berzarina street, building 6<br>
                    50 m. from the entrance to the university
    </div>
        <h2 class="fontTahoma footer-title">Opening hours</h2>
            <div class="footer-part2__text1 fontTahoma colorGrey">
                    We are open 7 days a week<br>
                    Happy-hours: 16.00 - 20.00<br>
                    Supper: 16.00 - 22.00<br>
                    <div class="footer-part2__text2 fontTahoma colorGrey">(510) 643-5678</div>
                    <div class="footer-part2__link fontTahoma colorGrey"><a href="" class="fontTahoma">info@burritochilebar.com</a></div>
            </div>
        <h2 class="fontTahoma footer-title">Subscribe</h2>
                <div class="footer-part2-form-wrap">
                        <form method="post" action="obrabotchik.php"  class="footer-part2-forma">
                             <input type="text" name="footer-part2__cell1" value="YOUR EMAIL" class="footer-part2__cell1"/>
                                    
                             
                             <input type="submit" name="footer-part2__cell2" value="sign up" class="footer-part2__cell2" />
                        </form>
                </div>
</div>
                <div class="wrap-footer-block2 col-lg-12">
                    <div class="footer-block2 col-lg-12">
                        <div class="footer-block2__content1 text-center whitecolor size21px fontArial col-lg-12">
                           <p>2021 Burrito Chili-Bar</p>
                           <p>Website built at The Building Block</p>
                        </div>
                    <div class="footer-block2__content2 text-center whitecolor size21px fontGabriola col-lg-12">TERMS & PRIVACY POLICYRESERVE NOW</div>
                    </div>
                </div>
            </div>
        </div>
    
</footer><!--/Footer-->
</div>

 



<script src="/js/app.min.js"></script>
<script type="text/javascript" src="js/tinyfader.js"></script>
<script src="/js/jquery-3.0.0.min.js"></script>
<script src="/js/bootstrap.min.js"></script>

<script type="text/javascript">
 $(document).ready(function() {
    $('.extrasWatch').click(function(evt) {
       evt.preventDefault();
        var id = $(this).attr("data-id");
            $.post("/extras/watchAjax/"+id, {}, function (data) {
                $("#cart-count").html(data);
            });
    });


 });
</script>

<script type="text/javascript">    
var slideshow=new TINY.fader.fade('slideshow',{
    id:'slides',
    auto:10,
    resume:true,
    
    activeclass:'current',
    visible:true,
    position:0
});</script>

</body>
</html>